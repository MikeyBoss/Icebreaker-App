# App portion of the Icebreaker Project

## The Project
The Icebreaker Project is an app designed to help break the ice and introduce people at various, primarily, professional, events through various teambuilding games and activities.
This benefits people's comfort at the event, their interpersonal networks, as well as benefiting the event itself.
The project is part of a Capstone graduation Project and as such external contribution is limited. See CONTRIBUTING.
### The Project consists of two parts:
- The cross platform app written in HTML/CSS/Javascript using the [Phonegap](https://www.phonegap.com) framework and buildkit.
- The [Icebreaker-Server](https://github.com/Icebreaker-Project/Icebreaker-Server) acting as the backend.

## App outline
- The App is the main part of the Project, written with the [Phonegap](https://www.phonegap.com) Framework.
- On first launch the user is prompted to enter various personal information (stored locally) including:
  - Full Name
  - Occupation/Title
  - Email
  - Phone number
  - Various social profiles (optional)
- Main menu includes only two options: Create Room, and Join Room
  - Create room creates a new room on the server (see server documentation)
  - Join room prompts for a code, then joins the applicable room.
- The host of a room(whoever opened it) can:
  - Start a game or activity.
  - Display text to all members (presentations?).
  - Share files (?)
  - ETC (To be determined)
  - And everything that a member of the room can do.
- Members of a room can:
  - View a list of all other members.
  - Join in on games.

## TODO
- Come up with ideas for games and activities. (Document this separately)
- Setup framework of both the App and server.
- Plan out code structure
