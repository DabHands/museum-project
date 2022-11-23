import sys
import cv2 as cv

def matchFeatures(img1, img2):

    # Initiate feature detector: ORB
    fd = cv.ORB_create(nfeatures=200)  # Limit number of features found to 200

    # find the keypoints and descriptors with ORB
    kps1, descs1 = fd.detectAndCompute(img1, None)
    kps2, descs2 = fd.detectAndCompute(img2, None)

    # create BFMatcher object
    bf = cv.BFMatcher(cv.NORM_HAMMING, crossCheck=True)

    # Match descriptors.
    matches = bf.match(descs1, descs2)

    print(len(matches))

    # Draw matches
    imgMatches = img1.copy()
    imgMatches = cv.drawMatches(
        img1, kps1, img2, kps2, matches, imgMatches, flags=2)

    cv.imwrite('matches.jpg', imgMatches)


input_file = 'recognition-service\\pictures\\pineapple.jpg'
img = cv.imread(input_file)
#
# Check for success
if img is None:
    print('Failed to open', input_file)
    sys.exit()

input_file = 'recognition-service\\pictures\\book.jpg'
imgObj = cv.imread(input_file)

#
# Check for success
if imgObj is None:
    print('Failed to open', input_file)
    sys.exit()

# Find the features in the image.
matchFeatures(img, imgObj)
