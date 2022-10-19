import cv2 as cv
import glob
import sys
import os

file_filter = "dab_hands/*" # all files in input folder
output_folder = "embroideries/"

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

    # Resize image
    out = cv.resize(img, (int(img.shape[1]/2), int(img.shape[0]/2)))

    # Create output file name
    path, file = os.path.split(infile)
    print(file)
    print(output_folder)
    outfile = output_folder + file
    print("\tOutput:", outfile)

    cv.imwrite(outfile, out)
