### What is a Package
A collection of code organized in a specific way so that it can be easily used by other parts of the code. It's like a toolkit. They are often distributed and managed through package managers like npm.

- **Frontend Package**: These are toolkits specifically for the user interface. They include everything needed to display and interact with the application on the screen. This could be something like a package for handling buttons or navigation menus.
- **Backend Package**: These are toolkits for the server-side of the application. They manage data, handle requests, and control what's happening behind the scenes. This could include packages for connecting to a database or managing user authentication.
- **Common Package**: These are toolkits used by both the frontend and the backend. They contain shared functionalities that are needed in both areas. This might include packages that define shared data types or utility functions.

### Packages Folder

```bash
packages/
├── app/              # Backstage Frontend
├── backend/          # Backstage Backend       
├── devkit/           # Utilities for frontend
├── devkit-backend/   # Utilities for backend
└── devkit-common/    # Utilities for both
```
---

Imagine you have a big toy set to build a city. This toy set is like Backstage, a tool to build software.

1. **Building Blocks (Packages)**: You have different types of building blocks like houses (plugins), roads (frontend), parks (backend), and people (common packages).
    
2. **Instructions (Overview & Dependencies)**: There's an instruction book that tells you how to put the blocks together. Some blocks only fit with certain others, and some can be used more than once in different places.
    
3. **Houses (Plugin Packages)**: Each house comes with different pieces like walls, roofs, and doors. You can mix and match them but must follow certain rules. You can even add extra rooms (optional features) if you want!
    
4. **Roads (Frontend Packages)**: The roads connect the houses and have two parts: main roads that form the core structure and smaller roads and paths (libraries) to build the neighborhoods.
    
5. **Parks (Backend Packages)**: Parks are open spaces with trees and benches that don't have a fixed design like the roads. You can set them up as you like but might have new designs in the future.
    
6. **People (Common Packages)**: The people are the characters that can be anywhere in the city, both in houses and parks. They are like special pieces that work everywhere.
    
7. **The Toy Set Manual (CLI)**: This is a special guidebook that helps you understand how to play with the toy set but isn't a toy itself. It's like a helper for building.
    

So, when you're building your toy city with Backstage, you follow certain rules and use different pieces to create houses, roads, parks, and add people. You can build it your way but still need to follow some guidelines to make sure everything fits together. It's like playing with a giant, flexible toy set where you can create your own city!
