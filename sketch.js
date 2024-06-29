// images
let toolbar_img, toolbar_highlight_img, inventory_img;
let grass_item_toolbar_img, gravel_item_toolbar_img, sand_item_toolbar_img, oak_log_item_toolbar_img, birch_log_item_toolbar_img,
	oak_plank_item_toolbar_img, birch_plank_item_toolbar_img, cobblestone_item_toolbar_img, stone_item_toolbar_img,
	white_concrete_item_toolbar_img, light_gray_concrete_item_toolbar_img, gray_concrete_item_toolbar_img,
	black_concrete_item_toolbar_img, brown_concrete_item_toolbar_img, red_concrete_item_toolbar_img,
	orange_concrete_item_toolbar_img,	yellow_concrete_item_toolbar_img, lime_concrete_item_toolbar_img,
	green_concrete_item_toolbar_img, cyan_concrete_item_toolbar_img, light_blue_concrete_item_toolbar_img,
	blue_concrete_item_toolbar_img, purple_concrete_item_toolbar_img, magenta_concrete_item_toolbar_img,
	pink_concrete_item_toolbar_img,	glass_item_toolbar_img, jukebox_item_toolbar_img;

let grass_item_inventory_img, gravel_item_inventory_img, sand_item_inventory_img, oak_log_item_inventory_img, birch_log_item_inventory_img,
	oak_plank_item_inventory_img, birch_plank_item_inventory_img, cobblestone_item_inventory_img, stone_item_inventory_img,
	white_concrete_item_inventory_img, light_gray_concrete_item_inventory_img, gray_concrete_item_inventory_img,
	black_concrete_item_inventory_img, brown_concrete_item_inventory_img, red_concrete_item_inventory_img,
	orange_concrete_item_inventory_img,	yellow_concrete_item_inventory_img, lime_concrete_item_inventory_img,
	green_concrete_item_inventory_img, cyan_concrete_item_inventory_img, light_blue_concrete_item_inventory_img,
	blue_concrete_item_inventory_img, purple_concrete_item_inventory_img, magenta_concrete_item_inventory_img,
	pink_concrete_item_inventory_img,	glass_item_inventory_img, jukebox_item_inventory_img;

// game
let world, buffer, texture;
let bgm, cow;
let x = 250, y = 250;
// block
let hover_location, hover_side;
let v_clicked = false;
let r_clicked = false;
// toolbar
let toolbar_highlight_x_init = 2;
let toolbar_highlight_x = 2;
let toolbar_items = [];
let toolbar_clicked_idx;
let toolbar_idx = 0;

// inventory
let inventory_items = [];
let inventory_open = false;
let clicked_item, clicked_from, clicked = 0;

// sensor
let sensor;
let p_pressed = false;

function preload() {
	bgm = loadSound("src/sounds/minecraft.mp3");
	toolbar_img = loadImage("src/images/toolbar/toolbar.png");
	toolbar_highlight_img = loadImage("src/images/toolbar/toolbar_highlight.png");
	inventory_img = loadImage("src/images/inventory_empty.png"); //inventory_empty

	grass_item_inventory_img = loadImage("src/images/item_inventory/grass_item_inventory.png");
	gravel_item_inventory_img = loadImage("src/images/item_inventory/gravel_item_inventory.png");
	sand_item_inventory_img = loadImage("src/images/item_inventory/sand_item_inventory.png");
	oak_log_item_inventory_img = loadImage("src/images/item_inventory/oak_log_item_inventory.png");
	birch_log_item_inventory_img = loadImage("src/images/item_inventory/birch_log_item_inventory.png");
	oak_plank_item_inventory_img = loadImage("src/images/item_inventory/oak_plank_item_inventory.png");
	birch_plank_item_inventory_img = loadImage("src/images/item_inventory/birch_plank_item_inventory.png");
	cobblestone_item_inventory_img = loadImage("src/images/item_inventory/cobblestone_item_inventory.png");
	stone_item_inventory_img = loadImage("src/images/item_inventory/stone_item_inventory.png");
	white_concrete_item_inventory_img = loadImage("src/images/item_inventory/white_concrete_item_inventory.png");
	light_gray_concrete_item_inventory_img = loadImage("src/images/item_inventory/light_gray_concrete_item_inventory.png");
	gray_concrete_item_inventory_img = loadImage("src/images/item_inventory/gray_concrete_item_inventory.png");
	black_concrete_item_inventory_img = loadImage("src/images/item_inventory/black_concrete_item_inventory.png");
	brown_concrete_item_inventory_img = loadImage("src/images/item_inventory/brown_concrete_item_inventory.png");
	red_concrete_item_inventory_img = loadImage("src/images/item_inventory/red_concrete_item_inventory.png");
	orange_concrete_item_inventory_img = loadImage("src/images/item_inventory/orange_concrete_item_inventory.png");
	yellow_concrete_item_inventory_img = loadImage("src/images/item_inventory/yellow_concrete_item_inventory.png");
	lime_concrete_item_inventory_img = loadImage("src/images/item_inventory/lime_concrete_item_inventory.png");
	green_concrete_item_inventory_img = loadImage("src/images/item_inventory/green_concrete_item_inventory.png");
	cyan_concrete_item_inventory_img = loadImage("src/images/item_inventory/cyan_concrete_item_inventory.png");
	light_blue_concrete_item_inventory_img = loadImage("src/images/item_inventory/light_blue_concrete_item_inventory.png");
	blue_concrete_item_inventory_img = loadImage("src/images/item_inventory/blue_concrete_item_inventory.png");
	purple_concrete_item_inventory_img = loadImage("src/images/item_inventory/purple_concrete_item_inventory.png");
	magenta_concrete_item_inventory_img = loadImage("src/images/item_inventory/magenta_concrete_item_inventory.png");
	pink_concrete_item_inventory_img = loadImage("src/images/item_inventory/pink_concrete_item_inventory.png");
	glass_item_inventory_img = loadImage("src/images/item_inventory/glass_item_inventory.png");
	jukebox_item_inventory_img = loadImage("src/images/item_inventory/jukebox_item_inventory.png");
}

function setup() {
	
	noCanvas();

    // construct the A-Frame world
	world = new World('VRScene');

    // set a background color for the world using RGB values
	world.setBackground(126, 171, 254);
	world.setUserPosition(0, 1.5, 0);

	buffer = createGraphics(500, 500);
	texture = world.createDynamicTextureFromCreateGraphics( buffer );

    world.setFlying(true);
	
	inventory_items = [
		{item: 'grass',
		img: grass_item_inventory_img,
		sides: ["grass_top", "grass_side", "grass_bottom"]},
		{item: 'gravel',
		img: gravel_item_inventory_img,
		sides: ["gravel_side", "gravel_side", "gravel_side"]},
		{item: 'sand',
		img: sand_item_inventory_img,
		sides: ["sand_side", "sand_side", "sand_side"]},
		{item: 'oak_log',
		img: oak_log_item_inventory_img,
		sides: ["oak_log_top", "oak_log_side", "oak_log_top"]},
		{item: 'birch_log',
		img: birch_log_item_inventory_img,
		sides: ["birch_log_top", "birch_log_side", "birch_log_top"]},
		{item: 'oak_plank',
		img: oak_plank_item_inventory_img,
		sides: ["oak_plank_side", "oak_plank_side", "oak_plank_side"]},
		{item: 'birch_plank',
		img: birch_plank_item_inventory_img,
		sides: ["birch_plank_side", "birch_plank_side", "birch_plank_side"]},
		{item: 'cobblestone',
		img: cobblestone_item_inventory_img,
		sides: ["cobblestone_side", "cobblestone_side", "cobblestone_side"]},
		{item: 'stone',
		img: stone_item_inventory_img,
		sides: ["stone_side", "stone_side", "stone_side"]},
		{item: 'white_concrete',
		img: white_concrete_item_inventory_img,
		sides: ["white_concrete_side", "white_concrete_side", "white_concrete_side"]},
		{item: 'light_gray_concrete',
		img: light_gray_concrete_item_inventory_img,
		sides: ["light_gray_concrete_side", "light_gray_concrete_side", "light_gray_concrete_side"]},
		{item: 'gray_concrete',
		img: gray_concrete_item_inventory_img,
		sides: ["gray_concrete_side", "gray_concrete_side", "gray_concrete_side"]},
		{item: 'gray_concrete',
		img: gray_concrete_item_inventory_img,
		sides: ["gray_concrete_side", "gray_concrete_side", "gray_concrete_side"]},
		{item: 'black_concrete',
		img: black_concrete_item_inventory_img,
		sides: ["black_concrete_side", "black_concrete_side", "black_concrete_side"]},
		{item: 'brown_concrete',
		img: brown_concrete_item_inventory_img,
		sides: ["brown_concrete_side", "brown_concrete_side", "brown_concrete_side"]},
		{item: 'red_concrete',
		img: red_concrete_item_inventory_img,
		sides: ["red_concrete_side", "red_concrete_side", "red_concrete_side"]},
		{item: 'orange_concrete',
		img: orange_concrete_item_inventory_img,
		sides: ["orange_concrete_side", "orange_concrete_side", "orange_concrete_side"]},
		{item: 'yellow_concrete',
		img: yellow_concrete_item_inventory_img,
		sides: ["yellow_concrete_side", "yellow_concrete_side", "yellow_concrete_side"]},
		{item: 'lime_concrete',
		img: lime_concrete_item_inventory_img,
		sides: ["lime_concrete_side", "lime_concrete_side", "lime_concrete_side"]},
		{item: 'green_concrete',
		img: green_concrete_item_inventory_img,
		sides: ["green_concrete_side", "green_concrete_side", "green_concrete_side"]},
		{item: 'cyan_concrete',
		img: cyan_concrete_item_inventory_img,
		sides: ["cyan_concrete_side", "cyan_concrete_side", "cyan_concrete_side"]},
		{item: 'light_blue_concrete',
		img: light_blue_concrete_item_inventory_img,
		sides: ["light_blue_concrete_side", "light_blue_concrete_side", "light_blue_concrete_side"]},
		{item: 'blue_concrete',
		img: blue_concrete_item_inventory_img,
		sides: ["blue_concrete_side", "blue_concrete_side", "blue_concrete_side"]},
		{item: 'purple_concrete',
		img: purple_concrete_item_inventory_img,
		sides: ["purple_concrete_side", "purple_concrete_side", "purple_concrete_side"]},
		{item: 'magenta_concrete',
		img: magenta_concrete_item_inventory_img,
		sides: ["magenta_concrete_side", "magenta_concrete_side", "magenta_concrete_side"]},
		{item: 'pink_concrete',
		img: pink_concrete_item_inventory_img,
		sides: ["pink_concrete_side", "pink_concrete_side", "pink_concrete_side"]},
		{item: 'jukebox',
		img: jukebox_item_inventory_img,
		sides: ["jukebox_top", "jukebox_side", "jukebox_side"]}
	]

	toolbar_items = inventory_items.slice(0, 9);
	
    // create a plane to serve as our "ground"
	for (i=-25; i<25; i++) {
		for (j=-25; j<25; j++) {

			var g = new Plane({
				x:i, y:-0.5, z:j,
				width:1, height:1,
				asset: 'grass_top',
				rotationX: -90,
				enterFunction: function() {
					if (v_clicked) this.setOpacity(0.5);
					hover_location = this.getWorldPosition();
					hover_location.y -= 0.5;
					hover_side = "top";
					console.log(removable);
				},
				leaveFunction: function() {
					this.setOpacity(1);
					hover_location = undefined;
					hover_side = undefined;
				}
			});
			g.tag.object3D.userData.removable = false;
			g.tag.object3D.userData.solid = true;
			world.add(g);
		}
	}

	sensor = new Sensor();


    cow = new GLTF({
		asset: 'cow',
		x: -5, y: 0.4, z: 0,
		scaleX: 0.05, scaleY: 0.05, scaleZ: 0.05
	});
	world.add(cow);
}

function draw() {
	if (p_pressed) {
		// see what's below / in front of the user
		let whatsBelow = sensor.getEntityBelowUser();
		let objectAhead = sensor.getEntityInFrontOfUser();

		// if the W key is pressed
		if (  keyIsDown(87)) {
			// assume we can move forward
			let okToMove = true;

			//console.log(objectAhead);

			// if there is an object, it is close and it is solid, prevent motion
			if (objectAhead && objectAhead.distance < 2 && objectAhead.object.el.object3D.userData.solid) {
				okToMove = false;
			}

			if (okToMove) {
				world.moveUserForward(0.1);
			}
		}

		// if what's below us is a set of stairs we should adjust our y value so we are on top of it
		if (whatsBelow) {
			let cp = world.getUserPosition();

			// falling
			if (whatsBelow.distance > 2) {
				world.setUserPosition( cp.x, cp.y-0.1, cp.z);
			}
			else if (whatsBelow.object.el.object3D.userData.stairs && whatsBelow.distance < 2) {
				world.setUserPosition( cp.x, cp.y + (1-whatsBelow.distance), cp.z);
			}
		}


		// if the S key is pressed
		if (  keyIsDown(83) ) {
			// move backwards (no collision detection)
			world.moveUserForward(-0.1);
		}
	}
	
}

function keyPressed() {
    switch (keyCode) {
		case 80: // 'p' 
			if (p_pressed) {
				p_pressed = false;
			}
			else {
				p_pressed = true;
			}
			break;
		case 82: // "r" removes block
			r_clicked = !r_clicked;
			break;
		case 86: // "v" enable block placing
			v_clicked = !v_clicked;
			break;
		case 69: // "e" inventory
			if (inventory_open) {
				inventory_open = false;
				toolbar_clicked_idx = undefined;
				clicked_item = undefined;
				clicked_from = undefined;
				clicked = 0;
			}
			else {
				inventory_open = true;
			}
			break;
		case 49: // 1
		  toolbar_idx = 0;
		  break;
		case 50: // 2
		  toolbar_idx = 1;
		  break;
		case 51: // 3
		  toolbar_idx = 2;
		  break;
		case 52: // 4
		  toolbar_idx = 3;
		  break;
		case 53: // 5
		  toolbar_idx = 4;
		  break;
		case 54: // 6
		  toolbar_idx = 5;
		  break;
		case 55: // 7
		  toolbar_idx = 6;
		  break;
		case 56: // 8
		  toolbar_idx = 7;
		  break;
		case 57: // 9
		  toolbar_idx = 8;
		  break;
	  }
}

function keyReleased() {
	// "c" place block
	if (v_clicked && keyCode == 67 && toolbar_items[toolbar_idx] != undefined) {
		// console.log("block created")
		// console.log(hover_side)
		// console.log(hover_location.x, hover_location.z)
		if (hover_side == "top") {
			var block = new Container3D({
				x:hover_location.x,
				y:hover_location.y+1,
				z:hover_location.z
			});
		}
		else if (hover_side == "front") {
			var block = new Container3D({
				x:hover_location.x,
				y:hover_location.y,
				z:hover_location.z+1
			});
		}
		else if (hover_side == "left") {
			var block = new Container3D({
				x:hover_location.x-1,
				y:hover_location.y,
				z:hover_location.z
			});
		}
		else if (hover_side == "right") {
			var block = new Container3D({
				x:hover_location.x+1,
				y:hover_location.y,
				z:hover_location.z
			});
		}
		else if (hover_side == "back") {
			var block = new Container3D({
				x:hover_location.x,
				y:hover_location.y,
				z:hover_location.z-1
			});
		}
		else if (hover_side == "bottom") {
			var block = new Container3D({
				x:hover_location.x,
				y:hover_location.y-1,
				z:hover_location.z
			});
		}
		block.tag.object3D.userData.removable = true;
		block.tag.object3D.userData.solid = true;
		world.add(block);

		var block_top = new Plane({
			x:0, y:0.5, z:0,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[0],
			side: 'double',
			rotationX:-90,

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "top";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_top);

		var block_front = new Plane({
			x:0, y:0, z:0.5,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[1],
			side: 'double',

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "front";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_front);

		var block_left = new Plane({
			x:-0.5, y:0, z:0,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[1],
			side: 'double',
			rotationY:-90,

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "left";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_left);

		var block_right = new Plane({
			x:0.5, y:0, z:0,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[1],
			side: 'double',
			rotationY:90,

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "right";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_right);

		var block_back = new Plane({
			x:0, y:0, z:-0.5,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[1],
			side: 'double',
			rotationX:180,
			rotationZ:180,

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "back";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_back);

		var block_bottom = new Plane({
			x:0, y:-0.5, z:0,
			width:1, height:1,
			asset: toolbar_items[toolbar_idx].sides[2],
			side: 'double',
			rotationX:90,

			enterFunction: function() {
				if (v_clicked) this.setOpacity(0.5);
				if (r_clicked) this.setColor(255, 100, 100);
				hover_location = block.getWorldPosition();
				hover_side = "bottom";
			},
			leaveFunction: function() {
				this.setOpacity(1);
				this.setColor(255, 255, 255);
				hover_location = undefined;
				hover_side = undefined;
			},
			clickFunction: function() {
				if (r_clicked && block.tag.object3D.userData.removable == true) {
					world.remove(block);
				}
			}
		});
		block.add(block_bottom);
	}
}

// canvas for toolbar
var canvas_toolbar = function( sketch ) {
    sketch.setup = function() {
		let canvas1 = sketch.createCanvas(751, 168); // 759, 170
		canvas1.position(window.innerWidth/2 - 751/2,window.innerHeight-168);
    }
    sketch.draw = function() {
		sketch.image(toolbar_img, 0, 0, 751, 168);
          for (let i=0; i<toolbar_items.length; i++) {
              if (toolbar_items[i] != undefined) {
                  sketch.image(toolbar_items[i].img, 13+1 + (82 * i), 86+1); // 56
              }
          }
		  // toolbar highlight
          sketch.image(toolbar_highlight_img, 2+82*toolbar_idx, 75, 88, 88); // 82: box + border, 2: initial x
    }
}
new p5(canvas_toolbar);

// canvas for inventory
  var canvas_inventory = function( sketch ) {
	let canvas2;
	sketch.setup = function() {
		canvas2 = sketch.createCanvas(780, 544); // inventory img size
		canvas2.position(window.innerWidth/2 - 780/2,window.innerHeight/2 - 544/2 - 50);
	}
	sketch.draw = function() {
		if (inventory_open){
			// position canvas out of screen since VR world cannot be clicked
			canvas2.position(window.innerWidth/2 - 780/2,window.innerHeight/2 - 544/2 - 50);
			sketch.image(inventory_img, 0, 0);

			// draw default items in inventory
			for (i=0; i<9; i++) {
				for (j=0; j<5; j++) {
					let inv_idx = i + 9*j

					if (inventory_items[inv_idx] != undefined) {
						sketch.image(inventory_items[inv_idx].img, 36 + (72*i), 72 + (72*j) );
					}
				}
			}

			// draw toolbar items in inventory
			for (i=0; i<toolbar_items.length; i++) {
				if (toolbar_items[i] != undefined) {
					sketch.image(toolbar_items[i].img, 36 + (72*i), 448);
				}
			}

			cv2x = mouseX - canvas2.position().x-32;
			cv2y = mouseY - canvas2.position().y-32;

			// displayed clicked (holding) item
			for (i=0; i<9; i++) {
				for (j=0; j<5; j++) {
					if (clicked == 1) {
						sketch.image(clicked_item.img, cv2x, cv2y)
					}
				}
			}
		}
		else {
			sketch.clear();
			canvas2.position(3000, 3000)
		}
	}

	sketch.mouseClicked = function() {
		if (inventory_open) {
			let cv2x = mouseX - canvas2.position().x;
			let cv2y = mouseY - canvas2.position().y;

			outerLoop:
			for (i=0; i<9; i++) {
				for (j=0; j<5; j++) {
					let inv_idx = i + 9*j

					// inventory
					if (cv2x>32+(72*i) && cv2x<32+(72*i)+64 && cv2y>68+(72*j) && cv2y<68+(72*j)+64) {
						console.log('inventory')

						// entire inventory items section
						if (clicked_from == 'toolbar' && clicked == 1) {
							console.log("inv clicked_from == 'toolbar'")
							toolbar_items[toolbar_clicked_idx] = undefined;
							toolbar_clicked_idx = undefined;
							clicked_item = undefined;
							clicked_from = undefined;
							clicked = 0;
							console.log(toolbar_items)
						}	

						// if clicked existing inventory items
						if (inv_idx < inventory_items.length) {
							console.log('if clicked existing inventory items')
							if (clicked == 0) {
								clicked_item = inventory_items.slice(inv_idx, inv_idx+1)[0];
								clicked_from = 'inventory';
								console.log(clicked_item, clicked)
								console.log('inv1')
								clicked++;
							}
							else if (clicked == 1 && clicked_from == 'inventory') {
								clicked_item = undefined;
								clicked_from = undefined;
								clicked = 0;
								console.log('resetInv')
								break outerLoop;
							}
						}
					}
					// toolbar of inventory
					else if (cv2x>36+(72*i) && cv2x<36+(72*i)+64 && cv2y>448 && cv2y<512) {
						// console.log('toolbar of inventory')
						if (clicked == 0) {
							clicked_item = inventory_items.slice(i, i+1)[0];
							clicked_from = 'toolbar';
							toolbar_clicked_idx = i;
							console.log(clicked_item)
							console.log('tool1')
							clicked++;
						}
						else if (clicked == 1 && clicked_from == 'inventory') {
							toolbar_items[i] = clicked_item;
							console.log("tool clicked == 1 && clicked_from == 'inventory'")
							clicked_item = undefined;
							clicked_from = undefined;
							clicked = 0;
							console.log(toolbar_items)
							break outerLoop;
						}						
					}
				}
			}
			console.log(clicked)
		}
	}
}
new p5(canvas_inventory);

class Sensor {
	constructor() {
		this.rayCaster = new THREE.Raycaster();
		this.userPosition = new THREE.Vector3(0,0,0);
		this.downVector = new THREE.Vector3(0,-1,0);
		this.intersects = [];

		this.rayCasterFront = new THREE.Raycaster();
		this.cursorPosition = new THREE.Vector2(0,0);
		this.intersectsFront = [];
	}

	getEntityInFrontOfUser() {
		let cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		if (world.camera.cameraEl && world.camera.cameraEl.object3D && world.camera.cameraEl.object3D.children.length >= 2) {
			this.rayCasterFront.setFromCamera( this.cursorPosition, world.camera.cameraEl.object3D.children[1]);
			this.intersectsFront = this.rayCasterFront.intersectObjects( world.threeSceneReference.children, true );

			for (let i = 0; i < this.intersectsFront.length; i++) {
				if (!this.intersectsFront[i].object.el.object3D.userData.solid) {
					this.intersectsFront.splice(i,1);
					i--;
				}
			}

			if (this.intersectsFront.length > 0) {
				return this.intersectsFront[0];
			}
			return false;
		}
	}
	
	// Unused function
	getEntityBehindOfUser() {
		let cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		if (world.camera.cameraEl && world.camera.cameraEl.object3D && world.camera.cameraEl.object3D.children.length >= 2) {
			this.rayCasterFront.setFromCamera( this.cursorPosition, world.camera.cameraEl.object3D.children[1]);
			this.intersectsFront = this.rayCasterFront.intersectObjects( world.threeSceneReference.children, true );

			for (let i = 0; i < this.intersectsFront.length; i++) {
				if (!this.intersectsFront[i].object.el.object3D.userData.solid) {
					this.intersectsFront.splice(i,1);
					i--;
				}
			}

			if (this.intersectsFront.length > 0) {
				return this.intersectsFront[0];
			}
			return false;
		}
	}

	getEntityBelowUser() {
		let cp = world.getUserPosition();
		this.userPosition.x = cp.x;
		this.userPosition.y = cp.y;
		this.userPosition.z = cp.z;

		this.rayCaster.set(this.userPosition, this.downVector);
		this.intersects = this.rayCaster.intersectObjects( world.threeSceneReference.children, true );

		for (let i = 0; i < this.intersects.length; i++) {
			if (!(this.intersects[i].object.el.object3D.userData.solid)) {
				this.intersects.splice(i,1);
				i--;
			}
		}

		if (this.intersects.length > 0) {
			return this.intersects[0];
		}
		return false;
	}
}