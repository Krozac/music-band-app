import os
import random
from PIL import Image

# Function to generate random colors
def generate_random_color():
    return (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

# Function to generate a random image
def generate_random_image():
    # Folder where images will be saved
    output_folder = "generated_images"
    
    # Create the folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Load the icon image
    icon_path = "icon.png"
    icon = Image.open(icon_path)
    
    # Generate a random number of images (between 10 and 50)
    num_images = 35

    for i in range(num_images):
        # Generate random width and height for the image
        width = 500  # Random width between 100 and 1000
        height = 500  # Random height between 100 and 1000
        
        # Generate random color
        color = generate_random_color()
        
        # Create an image with the random size and color
        image = Image.new("RGB", (width, height), color)
        
        # Calculate the position to place the icon at the center
        icon_width, icon_height = icon.size
        x_position = (width - icon_width) // 2
        y_position = (height - icon_height) // 2
        
        # Paste the icon onto the center of the image
        image.paste(icon, (x_position, y_position), icon.convert("RGBA").getchannel("A"))

        # Save the image in the folder
        image_path = os.path.join(output_folder, f"album_{i}.png")
        image.save(image_path)

# Call the function to generate and save random images
generate_random_image()
