class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    fly(){
        this.Sling.bodyA=null;
    }
}