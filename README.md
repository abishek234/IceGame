<h1 align="center">IceGame</h1>


## Gameplay

### Get Ready!

Once you are have joined a room, please select a colour for your avatar and click the ready button!
Background Music is playing, but you can mute it with the button on the top left corner.



### Game Configurations

Only the host can change the game configuration. If no seal player is chosen, the host will be the seal by default.


### Control and Rules

|  Key  |                                      Action                                       |
| :---: | :-------------------------------------------------------------------------------: |
|   K   |                             Move up one ice (square)                              |
|   N   |                                 Move down one ice                                 |
|   A   |                                 Move left one ice                                 |
|   R   |                                Move right one ice                                 |
| Space | Break the neighbouring ice in the direction that the player is facing (seal only) |

**Seal** can only move in water (where ice is broken).

**Penguin** can only move on the ices (light blue squares).

If a **penguin** is on a broken ice at any time, it sadly dies.

When all **penguin** players are dead before the time is up, the **seal** player wins!

Otherwise, if there is at least one **penguin** player that is alive at the end, the **penguin** players lose...



To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js 16.x](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/getting-started/install) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/abishek234/IceGame.git

# Install dependencies
$ yarn install

# Run the app locally
$ yarn start:dev
```

By default your application will be hosted at `http://localhost:3000`, while the
socket backend at `http://localhost:8080/`.


## Tech Stack

- Node
- Express
- React
- Mantine
- Tailwind
- SocketIO



