const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

function setup() {
    createCanvas(1240, 400);
    engine = Engine.create();
    ballOptions = {
        density:0.005,
        restitution:0.8
    }
    options = {
        isStatic: true,
    };
    ybutton = createImg("push.png")
    ybutton.position(340,20)
    ybutton.size(40,40)
    ybutton.mouseClicked(force_y)
    button = createImg("push.png")
    button.position(20,20)
    button.size(40,40)
    button.mouseClicked(force)
    world = engine.world;
    rectMode(CENTER);
    ellipseMode(RADIUS);
    ball = Bodies.circle(200,200,20,ballOptions)
    World.add(world, ball)
    esquerda = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, esquerda);
    baixo = Bodies.rectangle(620, 390, 1240, 20, options);
    World.add(world, baixo);
    cesta1 = Bodies.rectangle(850,300,10,200,options);
    World.add(world, cesta1)
    cesta2 = Bodies.rectangle(1050,300,10,200,options);
    World.add(world, cesta2)
    direita = Bodies.rectangle(1230, 200, 20, 400, options);
    World.add(world, direita);
    cima = Bodies.rectangle(620, 10, 1240, 20, options);
    World.add(world, cima);
   
}

function draw() {
    background(51);
    fill("orange");
    ellipse(ball.position.x,ball.position.y,20,20)
    rect(esquerda.position.x, esquerda.position.y, 20, 400);
    rect(direita.position.x, direita.position.y, 20, 400);
    rect(cima.position.x, cima.position.y, 1240, 20);
   
    rect(cesta1.position.x,cesta1.position.y,10,200);
    rect(cesta2.position.x,cesta2.position.y,10,200)
    rect(baixo.position.x, baixo.position.y, 1240, 20);

    Engine.update(engine);
}

function force(){
    Matter.Body.applyForce(ball,{
        x: 0,y:0
    },{
        x: 0.05,y:0
    })

}
function force_y(){
    Matter.Body.applyForce(ball,{
        x:0,y:0
    },{
        x:0,y:0.05
    })
}