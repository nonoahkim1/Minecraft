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

let world;
let bgm;
var jukebox;
var cow;
let buffer, texture;
var ghost;
let x = 250, y = 250;
let i, j;
let hover_location, hover_side;
let c_clicked = false;
let inventory_open = false;
let inventory_index, inventory_clicked = 0;
let plane;
let holding_item = [];
let holding_count = 0;

let toolbar_highlight_x = -2;
let toolbar_index = 0;
let toolbar_items = [], toolbar_items_str = [],toolbar_inventory_items = [],  toolbar_items_sides = [];
let inventory_items = [], inventory_items_str = [], inventory_toolbar_items = [], inventory_items_sides = [];
let block_asset = ["grass_top", "grass_side", "grass_bottom"];
let toolbar_item_exist = true;
let clicked_from, clicked_toolbar_index;
let item_holding = false;

function preload() {
	toolbar_img = loadImage("images/toolbar/toolbar.png");
	toolbar_highlight_img = loadImage("images/toolbar/toolbar_highlight.png");
	inventory_img = loadImage("images/inventory_empty.png"); //inventory_empty

	grass_item_toolbar_img = loadImage("images/item_toolbar/grass_item_toolbar.png");
	gravel_item_toolbar_img = loadImage("images/item_toolbar/gravel_item_toolbar.png");
	sand_item_toolbar_img = loadImage("images/item_toolbar/sand_item_toolbar.png");
	oak_log_item_toolbar_img = loadImage("images/item_toolbar/oak_log_item_toolbar.png");
	birch_log_item_toolbar_img = loadImage("images/item_toolbar/birch_log_item_toolbar.png");
	oak_plank_item_toolbar_img = loadImage("images/item_toolbar/oak_plank_item_toolbar.png");
	birch_plank_item_toolbar_img = loadImage("images/item_toolbar/birch_plank_item_toolbar.png");
	cobblestone_item_toolbar_img = loadImage("images/item_toolbar/cobblestone_item_toolbar.png");
	stone_item_toolbar_img = loadImage("images/item_toolbar/stone_item_toolbar.png");
	white_concrete_item_toolbar_img = loadImage("images/item_toolbar/white_concrete_item_toolbar.png");
	light_gray_concrete_item_toolbar_img = loadImage("images/item_toolbar/light_gray_concrete_item_toolbar.png");
	gray_concrete_item_toolbar_img = loadImage("images/item_toolbar/gray_concrete_item_toolbar.png");
	black_concrete_item_toolbar_img = loadImage("images/item_toolbar/black_concrete_item_toolbar.png");
	brown_concrete_item_toolbar_img = loadImage("images/item_toolbar/brown_concrete_item_toolbar.png");
	red_concrete_item_toolbar_img = loadImage("images/item_toolbar/red_concrete_item_toolbar.png");
	orange_concrete_item_toolbar_img = loadImage("images/item_toolbar/orange_concrete_item_toolbar.png");
	yellow_concrete_item_toolbar_img = loadImage("images/item_toolbar/yellow_concrete_item_toolbar.png");
	lime_concrete_item_toolbar_img = loadImage("images/item_toolbar/lime_concrete_item_toolbar.png");
	green_concrete_item_toolbar_img = loadImage("images/item_toolbar/green_concrete_item_toolbar.png");
	cyan_concrete_item_toolbar_img = loadImage("images/item_toolbar/cyan_concrete_item_toolbar.png");
	light_blue_concrete_item_toolbar_img = loadImage("images/item_toolbar/light_blue_concrete_item_toolbar.png");
	blue_concrete_item_toolbar_img = loadImage("images/item_toolbar/blue_concrete_item_toolbar.png");
	purple_concrete_item_toolbar_img = loadImage("images/item_toolbar/purple_concrete_item_toolbar.png");
	magenta_concrete_item_toolbar_img = loadImage("images/item_toolbar/magenta_concrete_item_toolbar.png");
	pink_concrete_item_toolbar_img = loadImage("images/item_toolbar/pink_concrete_item_toolbar.png");
	glass_item_toolbar_img = loadImage("images/item_toolbar/glass_item_toolbar.png");
	jukebox_item_toolbar_img = loadImage("images/item_toolbar/jukebox_item_toolbar.png");

	grass_item_inventory_img = loadImage("images/item_inventory/grass_item_inventory.png");
	gravel_item_inventory_img = loadImage("images/item_inventory/gravel_item_inventory.png");
	sand_item_inventory_img = loadImage("images/item_inventory/sand_item_inventory.png");
	oak_log_item_inventory_img = loadImage("images/item_inventory/oak_log_item_inventory.png");
	birch_log_item_inventory_img = loadImage("images/item_inventory/birch_log_item_inventory.png");
	oak_plank_item_inventory_img = loadImage("images/item_inventory/oak_plank_item_inventory.png");
	birch_plank_item_inventory_img = loadImage("images/item_inventory/birch_plank_item_inventory.png");
	cobblestone_item_inventory_img = loadImage("images/item_inventory/cobblestone_item_inventory.png");
	stone_item_inventory_img = loadImage("images/item_inventory/stone_item_inventory.png");
	white_concrete_item_inventory_img = loadImage("images/item_inventory/white_concrete_item_inventory.png");
	light_gray_concrete_item_inventory_img = loadImage("images/item_inventory/light_gray_concrete_item_inventory.png");
	gray_concrete_item_inventory_img = loadImage("images/item_inventory/gray_concrete_item_inventory.png");
	black_concrete_item_inventory_img = loadImage("images/item_inventory/black_concrete_item_inventory.png");
	brown_concrete_item_inventory_img = loadImage("images/item_inventory/brown_concrete_item_inventory.png");
	red_concrete_item_inventory_img = loadImage("images/item_inventory/red_concrete_item_inventory.png");
	orange_concrete_item_inventory_img = loadImage("images/item_inventory/orange_concrete_item_inventory.png");
	yellow_concrete_item_inventory_img = loadImage("images/item_inventory/yellow_concrete_item_inventory.png");
	lime_concrete_item_inventory_img = loadImage("images/item_inventory/lime_concrete_item_inventory.png");
	green_concrete_item_inventory_img = loadImage("images/item_inventory/green_concrete_item_inventory.png");
	cyan_concrete_item_inventory_img = loadImage("images/item_inventory/cyan_concrete_item_inventory.png");
	light_blue_concrete_item_inventory_img = loadImage("images/item_inventory/light_blue_concrete_item_inventory.png");
	blue_concrete_item_inventory_img = loadImage("images/item_inventory/blue_concrete_item_inventory.png");
	purple_concrete_item_inventory_img = loadImage("images/item_inventory/purple_concrete_item_inventory.png");
	magenta_concrete_item_inventory_img = loadImage("images/item_inventory/magenta_concrete_item_inventory.png");
	pink_concrete_item_inventory_img = loadImage("images/item_inventory/pink_concrete_item_inventory.png");
	glass_item_inventory_img = loadImage("images/item_inventory/glass_item_inventory.png");
	jukebox_item_inventory_img = loadImage("images/item_inventory/jukebox_item_inventory.png");

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

	/*var sky = new Plane({
						x:0, y:50, z:0,
						width:500, height:500,
						asset: 'sky',
						repeatX: 1,
						repeatY: 1,
						rotationX:90, metalness:0.25
					   });
	// add the plane to our world
	world.add(sky);*/
	toolbar_items = [grass_item_toolbar_img, gravel_item_toolbar_img, sand_item_toolbar_img, oak_log_item_toolbar_img, birch_log_item_toolbar_img,
			oak_plank_item_toolbar_img, birch_plank_item_toolbar_img, cobblestone_item_toolbar_img, stone_item_toolbar_img];
	toolbar_inventory_items = [grass_item_inventory_img, gravel_item_inventory_img, sand_item_inventory_img, oak_log_item_inventory_img, birch_log_item_inventory_img,
			oak_plank_item_inventory_img, birch_plank_item_inventory_img, cobblestone_item_inventory_img, stone_item_inventory_img];
	toolbar_items_str = ["grass", "gravel", "sand", "oak_log", "birch_log", "oak_plank", "birch_plank", "cobblestone", "stone"];
	toolbar_items_sides = [ ["grass_top", "grass_side", "grass_bottom"], ["gravel_side", "gravel_side", "gravel_side"], ["sand_side", "sand_side", "sand_side"],
			["oak_log_top", "oak_log_side", "oak_log_top"], ["birch_log_top", "birch_log_side", "birch_log_top"], ["oak_plank_side", "oak_plank_side", "oak_plank_side"],
			["birch_plank_side", "birch_plank_side", "birch_plank_side"], ["cobblestone_side", "cobblestone_side", "cobblestone_side"], ["stone_side", "stone_side", "stone_side"] ];

	inventory_items = [grass_item_inventory_img, gravel_item_inventory_img, sand_item_inventory_img, oak_log_item_inventory_img,
			birch_log_item_inventory_img,	oak_plank_item_inventory_img, birch_plank_item_inventory_img, cobblestone_item_inventory_img,
			stone_item_inventory_img,	white_concrete_item_inventory_img, light_gray_concrete_item_inventory_img, gray_concrete_item_inventory_img,
			black_concrete_item_inventory_img, brown_concrete_item_inventory_img, red_concrete_item_inventory_img,
			orange_concrete_item_inventory_img,	yellow_concrete_item_inventory_img, lime_concrete_item_inventory_img,
			green_concrete_item_inventory_img, cyan_concrete_item_inventory_img, light_blue_concrete_item_inventory_img,
			blue_concrete_item_inventory_img, purple_concrete_item_inventory_img, magenta_concrete_item_inventory_img,
			pink_concrete_item_inventory_img,	glass_item_inventory_img, jukebox_item_inventory_img];
	inventory_toolbar_items = [grass_item_toolbar_img, gravel_item_toolbar_img, sand_item_toolbar_img, oak_log_item_toolbar_img,
			birch_log_item_toolbar_img,	oak_plank_item_toolbar_img, birch_plank_item_toolbar_img, cobblestone_item_toolbar_img,
			stone_item_toolbar_img,	white_concrete_item_toolbar_img, light_gray_concrete_item_toolbar_img, gray_concrete_item_toolbar_img,
			black_concrete_item_toolbar_img, brown_concrete_item_toolbar_img, red_concrete_item_toolbar_img,
			orange_concrete_item_toolbar_img,	yellow_concrete_item_toolbar_img, lime_concrete_item_toolbar_img,
			green_concrete_item_toolbar_img, cyan_concrete_item_toolbar_img, light_blue_concrete_item_toolbar_img,
			blue_concrete_item_toolbar_img, purple_concrete_item_toolbar_img, magenta_concrete_item_toolbar_img,
			pink_concrete_item_toolbar_img,	glass_item_toolbar_img, jukebox_item_toolbar_img];
	inventory_items_str = ["grass", "gravel", "sand", "oak log", "birch log",	"oak plank", "birch plank", "cobblestone", "stone",
			"white concrete", "light gray concrete", "gray concrete", "black concrete", " brown concrete", " red concrete", "orange concrete", "	yellow concrete", " lime concrete",
			"green concrete", " cyan concrete", " light blue concrete", "blue concrete", " purple concrete", " magenta concrete", "pink concrete", "glass", "jukebox"];
	inventory_items_sides = [ ["grass_top", "grass_side", "grass_bottom"], ["gravel_side", "gravel_side", "gravel_side"], ["sand_side", "sand_side", "sand_side"],
			["oak_log_top", "oak_log_side", "oak_log_top"], ["birch_log_top", "birch_log_side", "birch_log_top"], ["oak_plank_side", "oak_plank_side", "oak_plank_side"],
			["birch_plank_side", "birch_plank_side", "birch_plank_side"], ["cobblestone_side", "cobblestone_side", "cobblestone_side"], ["stone_side", "stone_side", "stone_side"],
			["white_concrete_side", "white_concrete_side", "white_concrete_side"], ["light_gray_concrete_side", "light_gray_concrete_side", "light_gray_concrete_side"],
			["gray_concrete_side", "gray_concrete_side", "gray_concrete_side"], ["black_concrete_side", "black_concrete_side", "black_concrete_side"],
			["brown_concrete_side", "brown_concrete_side", "brown_concrete_side"], ["red_concrete_side", "red_concrete_side", "red_concrete_side"],
			["orange_concrete_side", "orange_concrete_side", "orange_concrete_side"], ["yellow_concrete_side", "yellow_concrete_side", "yellow_concrete_side"],
			["lime_concrete_side", "lime_concrete_side", "lime_concrete_side"], ["green_concrete_side", "green_concrete_side", "green_concrete_side"],
			["cyan_concrete_side", "cyan_concrete_side", "cyan_concrete_side"], ["light_blue_concrete_side", "light_blue_concrete_side", "light_blue_concrete_side"],
			["blue_concrete_side", "blue_concrete_side", "blue_concrete_side"], ["purple_concrete_side", "purple_concrete_side", "purple_concrete_side"],
			["magenta_concrete_side", "magenta_concrete_side", "magenta_concrete_side"], ["pink_concrete_side", "pink_concrete_side", "pink_concrete_side"],
			["glass_side", "glass_side", "glass_side"], ["jukebox_top", "jukebox_side", "jukebox_top"] ];

  // create a plane to serve as our "ground"
	for (i=-25; i<25; i++) {
		for (j=-25; j<25; j++) {
			var g = new Plane({
				x:i, y:-0.5, z:j,
				width:1, height:1,
				asset: 'grass_top',
				rotationX: -90,
				enterFunction: function() {
					if (c_clicked) this.setOpacity(0.5);
					hover_location = this.getWorldPosition();
					hover_location.y -= 0.5;
					hover_side = "top";
				},
				leaveFunction: function() {
					this.setOpacity(1);
					hover_location = undefined;
					hover_side = undefined;
				}
			});
			world.add(g);
		}
	}

	var grass_block = new Container3D({
		x:0,
		y:0,
		z:0
	});
	world.add(grass_block);

	var grass_top = new Plane({
		x:0, y:0.5, z:0,
		width:1, height:1,
		asset: 'grass_top',
		side: 'double',
		rotationX:-90,

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "top";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_top);

	var grass_front = new Plane({
		x:0, y:0, z:0.5,
		width:1, height:1,
		asset: 'grass_side',
		side: 'double',

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "front";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_front);

	var grass_left = new Plane({
		x:-0.5, y:0, z:0,
		width:1, height:1,
		asset: 'grass_side',
		side: 'double',
		rotationY:-90,

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "left";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_left);

	var grass_right = new Plane({
		x:0.5, y:0, z:0,
		width:1, height:1,
		asset: 'grass_side',
		side: 'double',
		rotationY:90,

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "right";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_right);

	var grass_back = new Plane({
		x:0, y:0, z:-0.5,
		width:1, height:1,
		asset: 'grass_side',
		side: 'double',
		rotationX:180,
		rotationZ:180,

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "back";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_back);

	var grass_bottom = new Plane({
		x:0, y:-0.5, z:0,
		width:1, height:1,
		asset: 'grass_bottom',
		side: 'double',
		rotationX:90,

		enterFunction: function() {
			if (c_clicked) this.setOpacity(0.5);
			hover_location = grass_block.getWorldPosition();
			hover_side = "bottom";
		},
		leaveFunction: function() {
			this.setOpacity(1);
			hover_location = undefined;
			hover_side = undefined;
		}
	});
	grass_block.add(grass_bottom);

	/*var jukebox = new Container3D({
		x:0,
		y:0,
		z:0
	});
	world.add(jukebox);

	var jukebox_side = new Box({
		x: 0, y: 0, z: 0,
		width:1, height:1, depth:1,
		asset: 'jukebox_side',
		side: 'double',
		clickFunction: function() {
			music.play();
		},
		overFunction: function() {
			console.log(jukebox_side.getAsset() );
		}
	});
	jukebox.add(jukebox_side);

	var jukebox_top = new Plane({
		x:0, y:0.501, z:0,
		width:1, height:1,
		asset: 'jukebox_top',
		side: 'double',
		rotationX:-90,
		overFunction: function() {
			console.log(jukebox_top.getAsset() );
		}
	});
	jukebox.add(jukebox_top);*/

	// GLTF
	cow = new GLTF({
		asset: 'cow',
		x: -5, y: 0.4, z: 0,
		scaleX: 0.05, scaleY: 0.05, scaleZ: 0.05
	});
	world.add(cow);

	//ghost = new Ghast(0, 2, 0);
}

function draw() {

  /*if (mouseIsPressed) {
		world.moveUserForward(0.1);
	}
  var pos = world.getUserPosition();
  if (pos.x > 50) {
		world.setUserPosition(-50, pos.y, pos.z);
	}
	else if (pos.x < -50) {
		world.setUserPosition(50, pos.y, pos.z);
	}
	if (pos.z > 50) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -50) {
		world.setUserPosition(pos.x, pos.y, 50);
	}*/

	//ghost.move();
}

function keyPressed() {
	// "c" place block
	if (keyCode == 67) {
		if (c_clicked) {
			c_clicked = false;
		}
		else {
			c_clicked = true;
		}
		//console.log("c_clicked: ", c_clicked)
	}
	// "e" inventory
	if (keyCode == 69) {
		if (inventory_open) {
			inventory_open = false;
		}
		else {
			inventory_open = true;
		}
	}

	// Press 1 to grass block asset
	if (keyCode == 49) {
		toolbar_index = 0;
		toolbar_highlight_x = -2;
	}
	// Press 2 to use oak plank block asset
	if (keyCode == 50) {
		toolbar_index = 1;
		toolbar_highlight_x = 54;
	}
	// Press 3
	if (keyCode == 51) {
		toolbar_index = 2;
		toolbar_highlight_x = 110;
	}
	// Press 4
	if (keyCode == 52) {
		toolbar_index = 3;
		toolbar_highlight_x = 166;
	}
	// Press 5
	if (keyCode == 53) {
		toolbar_index = 4;
		toolbar_highlight_x = 222;
	}
	// Press 6
	if (keyCode == 54) {
		toolbar_index = 5;
		toolbar_highlight_x = 278;
	}
	// Press 7
	if (keyCode == 55) {
		toolbar_index = 6;
		toolbar_highlight_x = 334;
	}
	// Press 8
	if (keyCode == 56) {
		toolbar_index = 7;
		toolbar_highlight_x = 390;
	}
	// Press 9
	if (keyCode == 57) {
		toolbar_index = 8;
		toolbar_highlight_x = 446;
	}
}

function keyReleased() {
	// "r" place block
	block_asset = toolbar_items_sides[toolbar_index]
	console.log(block_asset)
	console.log(toolbar_items_sides)
	if (c_clicked && keyCode == 82 && hover_side != undefined && block_asset != undefined) {
		console.log("block created")
		console.log(hover_side)
		console.log(hover_location.x, hover_location.z)
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
		world.add(block);

		var block_top = new Plane({
			x:0, y:0.5, z:0,
			width:1, height:1,
			asset: block_asset[0],
			side: 'double',
			rotationX:-90,

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "top";
				//console.log("1")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("2")
			}
		});
		block.add(block_top);

		var block_front = new Plane({
			x:0, y:0, z:0.5,
			width:1, height:1,
			asset: block_asset[1],
			side: 'double',

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "front";
				//console.log("3")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("4")
			}
		});
		block.add(block_front);

		var block_left = new Plane({
			x:-0.5, y:0, z:0,
			width:1, height:1,
			asset: block_asset[1],
			side: 'double',
			rotationY:-90,

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "left";
				//console.log("5")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("6")
			}
		});
		block.add(block_left);

		var block_right = new Plane({
			x:0.5, y:0, z:0,
			width:1, height:1,
			asset: block_asset[1],
			side: 'double',
			rotationY:90,

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "right";
				//console.log("7")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("8")
			}
		});
		block.add(block_right);

		var block_back = new Plane({
			x:0, y:0, z:-0.5,
			width:1, height:1,
			asset: block_asset[1],
			side: 'double',
			rotationX:180,
			rotationZ:180,

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "back";
				//console.log("9")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("10")
			}
		});
		block.add(block_back);

		//if (c_clicked) this.setOpacity(0.5);

		var block_bottom = new Plane({
			x:0, y:-0.5, z:0,
			width:1, height:1,
			asset: block_asset[2],
			side: 'double',
			rotationX:90,

			enterFunction: function() {
				if (c_clicked) this.setOpacity(0.5);
				hover_location = block.getWorldPosition();
				hover_side = "bottom";
				//console.log("11")
			},
			leaveFunction: function() {
				this.setOpacity(1);
				hover_location = undefined;
				hover_side = undefined;
				//console.log("12")
			}
		});
		block.add(block_bottom);
	}
}

var canvas_toolbar = function( sketch ) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(513, 115); // 733, 164
    canvas1.position(window.innerWidth/2 - 513/2,window.innerHeight-115);
  }
  sketch.draw = function() {
    sketch.image(toolbar_img, 0, 0);
		for (i=0; i<toolbar_items.length; i++) {
			if (toolbar_items[i] != undefined) {
				sketch.image(toolbar_items[i], 10 + (56 * i), 115 - 12 - 43); // 56
			}
		}
		sketch.image(toolbar_highlight_img, toolbar_highlight_x, 48); //add 56
  }
};
new p5(canvas_toolbar);

var canvas_inventory = function( sketch ) {
	let canvas2, canvas_x_offset, canvas_y_offset;
  sketch.setup = function() {
    canvas2 = sketch.createCanvas(780, 544); // 780, 544
		canvas_x_offset = window.innerWidth/2 - 780/2;
		canvas_y_offset = window.innerHeight/2 - 544/2 - 50;
    canvas2.position(canvas_x_offset, canvas_y_offset);
  }
  sketch.draw = function() {
		if (inventory_open){
			// position canvas out of screen since VR world cannot be clicked
			canvas2.position(window.innerWidth/2 - 780/2,window.innerHeight/2 - 544/2 - 50);
			sketch.image(inventory_img, 0, 0);
		}
		else {
			sketch.clear();
			canvas2.position(3000, 3000)
		}

		// inventory
		for (i=0; i<9; i++) {
			for (j=0; j<5; j++) {
				if (inventory_items[i + 9*j] != undefined) {
					sketch.image(inventory_items[i + 9*j], 36 + (72*i), 72 + (72*j) );
				}
			}
		}

		// inventory toolbar
		for (i=0; i<toolbar_items.length; i++) {
			if (toolbar_inventory_items[i] != undefined) {
				if (clicked_toolbar_index != i) {
					sketch.image(toolbar_inventory_items[i], 36 + (72*i), 448);
				}
			}
		}

		// display holding block
		if (holding_item[0] != undefined) {
			//console.log("holding_item[1]", holding_item[1])
			sketch.image(holding_item[2], mouseX-canvas_x_offset-32, mouseY-canvas_y_offset-32);
		}

	}
	sketch.mouseReleased = function() {
		if (inventory_open) {
			// inventory click
			for (i=0; i<9; i++) {
				for (j=0; j<5; j++) {
					if ( (mouseX-canvas_x_offset)>(36 + (72*i)) && (mouseX-canvas_x_offset)<36 + ((72*i)+64) && (mouseY-canvas_y_offset)>(72 + (72*j)) && (mouseY-canvas_y_offset)<(72 + (72*j) + 64) ) {
						inventory_index = i + 9*j;
						//console.log("inventory index: ", inventory_index);

						// grab item if not holding item
						if (holding_item.length == 0 && inventory_items[inventory_index] != undefined) {
							holding_item = [inventory_toolbar_items.slice(inventory_index, inventory_index+1)[0],
															inventory_items_str.slice(inventory_index, inventory_index+1)[0],
															inventory_items.slice(inventory_index, inventory_index+1)[0],
															//inventory_items_sides.slice(inventory_index, inventory_index+1)[2],
															inventory_items_sides[inventory_index],
															"inventory", inventory_index];
							console.log("inventory holding: ", holding_item[1]);
							inventory_toolbar_items[inventory_index] = undefined;
							inventory_items_str[inventory_index] = undefined;
							inventory_items[inventory_index] = undefined;
							inventory_items_sides[inventory_index] = undefined;
							console.log(inventory_items_sides)
						}
						else { // if holding item

							// if clicked has item
							if(inventory_items[inventory_index] != undefined) { // if clicked has item
								holding_count++;
								if (holding_item[4] == "inventory") {
									//
									let temp_hold = [inventory_toolbar_items.slice(inventory_index, inventory_index+1)[0],
																	inventory_items_str.slice(inventory_index, inventory_index+1)[0],
																	inventory_items.slice(inventory_index, inventory_index+1)[0],
																	//inventory_items_sides.slice(inventory_index, inventory_index+1)[0],
																	inventory_items_sides[inventory_index],
																	"inventory", inventory_index];
																	console.log(temp_hold)
									inventory_toolbar_items[inventory_index] = holding_item[0];
									inventory_items_str[inventory_index] = holding_item[1];
									inventory_items[inventory_index] = holding_item[2];
									inventory_items_sides[inventory_index] = holding_item[3];
									console.log(inventory_items_sides)
									if (holding_count == 0) {
										inventory_toolbar_items[holding_item[5]] = undefined;
										inventory_items_str[holding_item[5]] = undefined;
										inventory_items[holding_item[5]] = undefined;
										inventory_items_sides[holding_item[5]] = undefined;
										console.log(inventory_items_sides)
									}
									holding_item = temp_hold;
								}
								else if (holding_item[4] == "toolbar") {
									toolbar_items[holding_item[5]] = inventory_toolbar_items[inventory_index];
									toolbar_items_str[holding_item[5]] = inventory_items_str[inventory_index];
									toolbar_inventory_items[holding_item[5]] = inventory_items[inventory_index];
									toolbar_items_sides[holding_item[5]] = inventory_items_sides[inventory_index];
									console.log(inventory_items_sides)
								}
							}
							else {
								console.log("inventory_items[inventory_index] == undefined")
								inventory_toolbar_items[inventory_index] = holding_item[0];
								inventory_items_str[inventory_index] = holding_item[1];
								inventory_items[inventory_index] = holding_item[2];
								inventory_items_sides[inventory_index] = holding_item[3];
								console.log(inventory_items_sides)
								/*if (holding_item[3] == "inventory") {
									inventory_toolbar_items[holding_item[4]] = undefined;
									inventory_items_str[holding_item[4]] = undefined;
									inventory_items[holding_item[4]] = undefined;
								}
								else if (holding_item[3] == "toolbar") {
									toolbar_items[holding_item[4]] = undefined;
									toolbar_items_str[holding_item[4]] = undefined;
									toolbar_inventory_items[holding_item[4]] = undefined;
								}*/
								holding_item = [];
								holding_count = 0;
								//console.log(inventory_items)
							}
						}
					}
				}
			}
			for (i=0; i<9; i++) {
				if ( (mouseX-canvas_x_offset)>(36 + (72*i)) && (mouseX-canvas_x_offset)<36 + ((72*i)+64) && (mouseY-canvas_y_offset)>448 && (mouseY-canvas_y_offset)<512 ) {
					console.log("toolbar")
					if (holding_item.length == 0 && toolbar_items[i] != undefined) {
						holding_item = [inventory_toolbar_items.slice(i, i+1)[0],
														inventory_items_str.slice(i, i+1)[0],
														inventory_items.slice(i, i+1)[0],
														inventory_items_sides.slice(i, i+1)[0],
														"toolbar", i];
														console.log(holding_item)
						console.log("inventory holding: ", holding_item[1]);
						toolbar_items[i] = undefined;
						toolbar_items_str[i] = undefined;
						toolbar_inventory_items[i] = undefined;
						toolbar_items_sides[i] = undefined;
						console.log(toolbar_items_sides)
					}
					else { // if holding item
						if(toolbar_items[i] != undefined) {

						}
						else {
							toolbar_items[i] = holding_item[0];
							toolbar_items_str[i] = holding_item[1];
							toolbar_inventory_items[i] = holding_item[2];
							toolbar_items_sides[i] = holding_item[3];
							console.log(toolbar_items_sides)
							holding_item = [];
							console.log(toolbar_items_str)
						}
					}
				}
			}
		}
	}
};

new p5(canvas_inventory);

/*class Ghast {
	constructor(x, y, z) {
		this.container = new Container3D( {
			x: x, y: y, z: z
		});
		world.add(this.container);

		this.ghast_top = new Plane({
			x:0, y:6.5, z:0,
			width:3, height:3,
			asset: 'ghast_top',
			rotationX:-90
		});
		this.container.add(this.ghast_top);

		this.ghast_front = new Plane({
			x:0, y:5, z:1.5,
			width:3, height:3,
			asset: 'ghast_front'
		});
		this.container.add(this.ghast_front);

		this.ghast_side1 = new Plane({
			x:-1.5, y:5, z:0,
			width:3, height:3,
			asset: 'ghast_side',
			rotationY:-90
		});
		this.container.add(this.ghast_side1);

		this.ghast_side2 = new Plane({
			x:1.5, y:5, z:0,
			width:3, height:3,
			asset: 'ghast_side',
			rotationY:90
		});
		this.container.add(this.ghast_side2);

		this.ghast_back = new Plane({
			x:0, y:5, z:-1.5,
			width:3, height:3,
			asset: 'ghast_back',
			rotationX:180,
			rotationZ:180,
		});
		this.container.add(this.ghast_back);

		this.ghast_bottom = new Plane({
			x:0, y:3.5, z:0,
			width:3, height:3,
			asset: 'ghast_side',
			rotationX:90
		});
		this.container.add(this.ghast_bottom);

		this.ghast_leg1 = new Box({
			x: -0.9, y: 2.5, z: -1.1,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg1);

		this.ghast_leg2 = new Box({
			x: -0.9, y: 2.5, z: -0.2,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg2);

		this.ghast_leg3 = new Box({
			x: -0.9, y: 2.5, z: 0.7,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg3);

		this.ghast_leg4 = new Box({
			x: 0, y: 2.5, z: 0.7,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg4);

		this.ghast_leg5 = new Box({
			x: 0, y: 2.5, z: -0.2,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg5);

		this.ghast_leg6 = new Box({
			x: 0, y: 2.5, z: -1.1,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg6);

		this.ghast_leg7 = new Box({
			x: 0.9, y: 2.5, z: -1.1,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg7);

		this.ghast_leg8 = new Box({
			x: 0.9, y: 2.5, z: -0.2,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg8);

		this.ghast_leg8 = new Box({
			x: 0.9, y: 2.5, z: 0.7,
			width:0.45, height:2.6, depth:0.45,
			asset: 'ghast_leg',
			rotationX:15
		});
		this.container.add(this.ghast_leg8);

		this.xOffset = random(1000);
		this.zOffset = random(2000, 3000);
	}

	move() {
		var yMovement = 0;

		var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);

		this.xOffset += 0.01;
		this.yOffset += 0.01;

		this.container.nudge(xMovement, yMovement, zMovement);
	}
}





/*ToDo:
hover within range to place block
inventory handling, inverntory to toolbar
toolbar to toolbar

*/
