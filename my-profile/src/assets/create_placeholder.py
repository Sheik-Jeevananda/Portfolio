from PIL import Image, ImageDraw, ImageFont
import os

# Create a 400x400 placeholder image
img = Image.new('RGB', (400, 400), color='#0d1e30')
draw = ImageDraw.Draw(img)

# Draw circle background
draw.ellipse([50, 50, 350, 350], fill='#112435', outline='#06b6d4', width=3)

# Draw person silhouette
draw.ellipse([160, 100, 240, 180], fill='#22d3ee')  # head
draw.ellipse([120, 240, 280, 420], fill='#22d3ee')  # body

img.save('/home/claude/portfolio-vite/src/assets/profile.jpg', 'JPEG')
print("Created placeholder profile.jpg")
