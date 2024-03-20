# Create a directory for resized images
New-Item -ItemType Directory -Path .\iconsResized

# Loop through each PNG file in the current directory
Get-ChildItem -Filter *.png | ForEach-Object {
    # Resize the image and save it in the iconsResized directory with a new name
    magick "$($_.FullName)" -resize 64x64^! ".\iconsResized\$($_.BaseName)_64.png"
}