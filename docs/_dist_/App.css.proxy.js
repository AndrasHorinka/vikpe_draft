// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/* App */\n.app {\n  padding: 16px 32px 0;\n}\n\n.app-controls {\n  margin-bottom: 12px;\n  color: #fff;\n  font-size: 1.4rem;\n}\n\n.app-controls a {\n  color: darkmagenta;\n  text-decoration: none;\n}\n.app-controls a:hover {\n  color: magenta;\n}\n\n.app-controls .app-text-highlight {\n  color: cyan;\n}\n\n/* Team container */\n.app-teams-container {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  user-select: none;\n  justify-content: space-between;\n}\n\n/* Team */\n.app-team {\n  flex-flow: column nowrap;\n  transition: background-color 250ms ease-in;\n}\n\n.app-draft-status-in-progress .app-team-title {\n  opacity: 50%;\n}\n\n.app-team-droppable {\n  min-width: 320px;\n  min-height: 120px;\n  transition: background-color 250ms ease-in;\n  padding: 1em 1em 24px;\n  flex: 1 0 100%;\n}\n\n.app-team-title {\n  transition: opacity 250ms ease-in;\n  color: white;\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: bold;\n  display: none;\n}\n\n.app-draft-status-in-progress .app-team-highlight .app-team-title {\n  opacity: 100%;\n}\n\n.app-draft-status-in-progress .app-team-highlight {\n  border-color: cyan;\n  background-color: rgba(0, 255, 255, 0.4);\n}\n\n/* Player pool */\n.app-team-id-playerPool {\n  margin-top: 24px;\n  padding: 16px 16px 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 1em;\n  flex: 0 1 100%;\n}\n\n.app-draft-status-completed .app-team-id-playerPool {\n  opacity: 0 !important;\n}\n.app-draft-status-completed .app-team-id-playerPool > .app-team-title,\n.app-draft-status-completed .app-team-id-playerPool .app-player {\n  opacity: 0.3 !important;\n}\n\n.app-team-id-playerPool > .app-team-title {\n  opacity: 100% !important;\n}\n\n.app-team-id-playerPool > .app-team-droppable {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.app-team-id-playerPool > .app-team-droppable .app-player {\n  margin-right: 0.6em;\n}\n\n/* Player */\n.app-player {\n  width: 178px;\n}\n\n.app-player-draggable {\n  cursor: grabbing !important;\n  font-size: 1.5rem;\n  color: #345;\n  margin-bottom: 0.6rem;\n  border: 2px solid white;\n  border-radius: 0.5rem;\n  background-color: #fff;\n  box-shadow: #444 2px 2px 8px;\n  transition: background-color, width 250ms ease-in;\n}\n\n.app-player-draggable.app-dnd-drag {\n  background-color: yellow !important;\n}\n\n.app-player-content {\n  min-height: 34px;\n  padding: 0 0.4em;\n  display: flex;\n  align-items: center;\n}\n\n.app-player-flag {\n  margin-right: 0.5rem;\n}\n\n/* Custom Teams/Themes */\n.app-team-theme {\n  flex: 0 0 11%;\n  min-height: 400px;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column nowrap;\n  border: 5px solid black;\n  box-shadow: 0 0 12px black;\n  border-radius: 1em;\n}\n\n.app-teamcount-7 .app-team-theme:nth-child(8) {\n  display: none;\n}\n\n.app-team-theme .app-team-droppable {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.app-team-theme .app-team-droppable.app-dnd-dragover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.app-team-theme .app-team-title {\n  background: no-repeat center center;\n  background-size: cover;\n  height: 74px;\n  color: transparent;\n}\n\n.app-team-theme .app-player:nth-child(1) .app-player-content:after,\n.app-team-theme .app-player:nth-child(5) .app-player-content:after {\n  margin-left: auto;\n  font-size: 1.2em;\n  content: \"\\2605\"; /* Star in UTF8 */\n}\n\n.app-team-theme .app-player:nth-child(1) .app-player-content:after {\n  color: #999;\n}\n.app-team-theme .app-player:nth-child(5) .app-player-content:after {\n  color: saddlebrown;\n}\n\n.app-team-theme .app-player {\n  opacity: 0.75;\n}\n\n.app-draft-status-completed .app-player,\n.app-team-highlight .app-player {\n  opacity: 1;\n}\n\n.app-team-theme .app-player:nth-child(5) {\n  margin-top: 2em;\n}\n\n/* highlight picking captain/squad */\n.app-captain-1 .app-team-highlight .app-player:nth-child(1) .app-player-content {\n  background: linear-gradient(180deg, lightyellow, yellow);\n  color: black;\n}\n\n.app-captain-2 .app-team-highlight .app-player:nth-child(5) .app-player-content {\n  background: linear-gradient(180deg, lightyellow, yellow);\n  color: black;\n}\n\n/* end div2 */\n\n.app-team-theme .app-player-content {\n  background: linear-gradient(180deg, white, #ccc);\n}\n\n.app-team-theme-Rotfish .app-team-title {\n  background-image: url(static/img/Getquad_squad1.png);\n}\n\n.app-team-theme-Spawn .app-team-title {\n  background-image: url(static/img/Getquad_squad2.png);\n}\n\n.app-team-theme-Enforcer .app-team-title {\n  background-image: url(static/img/Getquad_squad3.png);\n}\n\n.app-team-theme-Shambler .app-team-title {\n  background-image: url(static/img/Getquad_squad4.png);\n}\n\n.app-team-theme-Fiend .app-team-title {\n  background-image: url(static/img/Getquad_squad5.png);\n}\n\n.app-team-theme-Zombie .app-team-title {\n  background-image: url(static/img/Getquad_squad6.png);\n}\n\n.app-team-theme-Ogre .app-team-title {\n  background-image: url(static/img/Getquad_squad7.png);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}