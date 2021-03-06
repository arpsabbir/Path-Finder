/*-----------------------------------------------------------------------------------*\
|*                                  NEEDED VARIABLES                                  |
\*-----------------------------------------------------------------------------------*/

var g_animSpeedinp  = document.getElementById('animspeed');
var g_nodeSizeinp   = document.getElementById('nodesize');
var g_myCanvas      = document.getElementById('myCanvas');
var g_dbgInfoinp    = document.getElementById('dbginfo');
var g_diagnoalinp   = document.getElementById('diagonal');
g_myCanvas.height   = document.getElementById('visualize').clientHeight;
g_myCanvas.width    = document.getElementById('visualize').clientWidth;
var g_heuristicinp  = document.getElementById('heuristic');
var g_asv           = document.getElementById('asv');             // animation speed value
var g_adv           = document.getElementById('adv');             // allow diagonal value
var g_nsv           = document.getElementById('nsv');             // node size value
var g_dv            = document.getElementById('dv');              // debug value
var g_context       = g_myCanvas.getContext('2d');                // Context
var g_nodeWidth     = 40;                                         // Width of the node squares
var g_numRows       = parseInt(g_myCanvas.height/g_nodeWidth -1); // Total number of rows
var g_numColumns    = parseInt(g_myCanvas.width/g_nodeWidth -1);  // Total number of columns
var g_numNodes      = g_numRows * g_numColumns;                   // Total number of nodes
var g_FPS           = 30;                                         // Frame Per Second
var g_timeInterval  = 1000/g_FPS;                                 // Time interval the gameloop is executed in ms
var g_nodes         = new Array(g_numNodes);                      // Holds all the nodes
var g_mouseX        = undefined;                                  // Mouse Y Co-ordinate
var g_mouseY        = undefined;                                  // Mouse X Co-ordinate
var g_clickType     = undefined;                                  // "right" or "left"
var g_currentKey    = undefined;                                  // Current key pressed!
var g_selectedNode  = undefined;                                  // index of node currently selected
var g_selectorWidth = 5;                                          // lineWidth of the selector
var g_object        = undefined;                                  // the object that lost it's home
var g_startingNode  = undefined;                                  // Starting Node
var g_endingNode    = undefined;                                  // Target node
var g_openList      = [];                                         // OPEN LIST
var g_closedList    = [];                                         // CLOSED LIST
var g_pathFound     = false;                                      // if the path is found it changes to true
var g_startSorting  = false;                                      // when set to true executes the path finder function
var g_mainChild     = undefined;                                  // Used when tracing path
var g_isDone        = false;                                      // Is the path finding function executed!
var g_frameCount    = 0;                                          // Count Frames
var g_timePassed    = 0;                                          // Count seconds
var g_pathNodes     = [];                                         // path from start to end
var g_currentNode   = undefined;                                  // the node being scanned
var g_neighbours    = [];                                         // neighbours of the node scanned
var g_animSpeed     = 4                                           // time%fps/animSpeed, default: 4
var g_showdbginfo   = true                                        // for now all that debug info shows or hides is the node id
var g_heuristic     = 'm'                                         // 'm', 'e', 'c', 'o'. Default m
var g_allowDiagonal = false                                       // is diagonal movement allowed
var g_reachedHome   = false                                       // object reached home
