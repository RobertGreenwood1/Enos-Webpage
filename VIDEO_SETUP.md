# Adding Videos to Your CRM App

Your app is now set up to display videos for each CRM feature demonstration. Here's how to add your videos:

## Required Video Files

Place these video files in the `public/videos/` directory:

1. `customer-management-demo.mp4` - Customer Management feature demo
2. `team-collaboration-demo.mp4` - Team Collaboration feature demo  
3. `pipeline-tracking-demo.mp4` - Pipeline Tracking feature demo
4. `performance-reports-demo.mp4` - Performance Reports feature demo

## Video Requirements

- **Format**: MP4 (recommended for best browser compatibility)
- **Resolution**: 1920x1080 or 1280x720 (16:9 aspect ratio)
- **Duration**: 30-90 seconds for optimal user experience
- **File size**: Keep under 10MB for fast loading
- **Audio**: Optional (videos play muted by default)

## How to Add Videos

### Method 1: Direct Upload
1. Navigate to your project: `cd enos-crm-homepage`
2. Copy your video files to: `public/videos/`
3. Ensure file names match exactly (case-sensitive)

### Method 2: Via File Manager
1. Open Finder/Explorer
2. Navigate to your project folder
3. Go to `public/videos/`
4. Drag and drop your video files

## Video Features

Your videos will have these interactive features:

- **Auto-poster**: Shows a placeholder image before play
- **Click to play**: Users click to start videos
- **Loop**: Videos automatically loop when finished
- **Responsive**: Works on both desktop and mobile
- **Smooth transitions**: Videos change smoothly as users scroll (desktop)
- **Play/pause controls**: Hover to show play/pause button

## Video Optimization Tips

1. **Compress videos** using tools like HandBrake or online compressors
2. **Use H.264 codec** for best compatibility
3. **Consider WebM format** as a fallback for better compression
4. **Test on mobile** to ensure smooth playback

## Testing Your Videos

1. Add your video files to `public/videos/`
2. Restart your development server: `npm run dev`
3. Navigate to http://localhost:3000
4. Scroll to the features section to see your videos

## Troubleshooting

**Videos not showing?**
- Check file names match exactly
- Ensure files are in `public/videos/` directory
- Check browser console for errors
- Try refreshing the page

**Videos not playing?**
- Ensure MP4 format with H.264 codec
- Check file size (large files may not load quickly)
- Test in different browsers

**Mobile issues?**
- Some mobile browsers have autoplay restrictions
- Videos should work with click-to-play functionality

## File Structure
```
public/
├── videos/
│   ├── customer-management-demo.mp4
│   ├── team-collaboration-demo.mp4
│   ├── pipeline-tracking-demo.mp4
│   └── performance-reports-demo.mp4
├── logo.png
└── placeholder.png
``` 