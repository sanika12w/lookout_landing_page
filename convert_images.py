import os
from PIL import Image

src_dir = r"D:\lookout\lookout-landing-page\public\app-store"
dest_dir = r"d:\lookout-landing-page\public\appstore"

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

# List of files to convert and their target names
mappings = {
    "dual-view.jpg": "dual-camera.webp",
    "coverage.jpg": "privacy.webp",
    "continuity.jpg": "continuity.webp",
    "dashcam-gps.jpg": "dashcam-gps.webp",
    "home-monitoring.jpg": "home-monitoring.webp",
    "max-perspective.jpg": "max-perspective.webp",
}

for src_name, dest_name in mappings.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        print(f"Converting {src_name} to {dest_name}...")
        im = Image.open(src_path)
        im.save(dest_path, "webp", quality=85)
    else:
        print(f"Source file not found: {src_path}")

print("Done!")
