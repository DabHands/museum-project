import cv2 as cv
import glob
import sys
import os
import numpy as np

file_filter = "input/*" # all files in input folder
margin_percent = 10 # how much of a margin to take around embroidery
standard_output_folder = "standard/"
thumbnail_output_folder = "thumbnail/"


########################################
##
def cropToEmbroidery(img):
    '''
    Crop image to obtain the embroidery only.
    Extracts as a rectangle around the centre of the embroidery.
    Works by finding long lines in the image (Hough).
    '''

    # Threshold the image to get the embroidery
    grey = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
    _, th = cv.threshold(grey, 128, 255, cv.THRESH_BINARY)

    # Find lines in the image
    lines = cv.HoughLinesP(th, 1, np.pi / 6, 2000)

    # Draw lines on image
#    if lines is not None:
#            for i in range(0, len(lines)):
#                l = lines[i][0]
#                cv.line(img, (l[0], l[1]), (l[2], l[3]), (0,0,255), 3, cv.LINE_AA)

    # Find top, left of bounding box for embroidery
    mins = lines.min(axis=0)[0]
    left = min(mins[0], mins[2])
    top = min(mins[1], mins[3])
    #print('l,t =', left, top)

    # Find bottom, right of bounding box for embroidery
    maxs = lines.max(axis=0)[0]
    right = max(maxs[0], maxs[2])
    bottom = max(maxs[1], maxs[3])
    #print('r,b =', right, bottom)

    # Find centre
    centre_c = int(0.5 * (left + right))
    centre_r = int(0.5 * (top + bottom))
    #print('centre  =', centre_r, centre_c)

    # Find max pixels from centre
    max_dist = max(abs(centre_c - left), abs(centre_c - right),
        abs(centre_r - top), abs(centre_r - bottom))
    #print(max_dist)

    # Calculate bounding SQUARE (with a margin)
    dist = int(max_dist * (1 + margin_percent/100.0))
    t = centre_r - dist
    b = centre_r + dist
    l = centre_c - dist
    r = centre_c + dist
    #print(l,t,r,b)

    crop = img[t:b, l:r]
    #cv.imwrite('crop.jpg', crop)
    return crop



########################################
##
if __name__ == '__main__':
    # Get list of files
    filenames = glob.glob(file_filter)

    if len(filenames) == 0:
        print("Error: No files found in", file_filter)
        sys.exit()

    for infile in filenames:
        print("Processing:", infile)

        img = cv.imread(infile)
        if img is None:
            print("\tError: Failed to open image")

        # Extract embroidery
        img = cropToEmbroidery(img)

        # Get file name
        path, file = os.path.split(infile)

        # Save as standard size (square)
        outfile = standard_output_folder + file
        out = cv.resize(img, (2000, 2000))
        print("\tOutput:", outfile)
        cv.imwrite(outfile, out)

        # Save as thumbnail size (square)
        outfile = thumbnail_output_folder + file
        out = cv.resize(img, (256, 256))
        print("\tOutput:", outfile)
        cv.imwrite(outfile, out)
