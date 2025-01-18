import os

def rename_images_in_directory():
    # Get the current working directory
    folder_path = os.getcwd()
    
    # List all files in the directory
    files = os.listdir(folder_path)

    # Filter out only image files (you can adjust extensions if needed)
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']
    images = [f for f in files if any(f.lower().endswith(ext) for ext in image_extensions)]
    
    # Rename each image file
    for idx, image in enumerate(images):
        # Get the file extension
        file_extension = os.path.splitext(image)[1]
        
        # Create a new filename
        new_name = f"photos_{idx+1}{file_extension}"
        
        # Get the full file path
        old_file_path = os.path.join(folder_path, image)
        new_file_path = os.path.join(folder_path, new_name)
        
        # Rename the file
        os.rename(old_file_path, new_file_path)
        print(f'Renamed: {image} -> {new_name}')

# Run the renaming function
rename_images_in_directory()
