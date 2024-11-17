class GameObject
{
    constructor()
    {
    /*Object properties (or attributes)*/
    //object position
     this.x=0;
     this.y=0;
     //object angle
     this.angle = 0;
     //object dimensions
     this.w=100;
     this.h=100;
     //object velocity
     this.vx=0;
     this.vy=0;
    //object color
     this.color = `hotpink`
    }

    //Draws a rectangle 
    renderSlippy(image)
    {
        ctx.save();
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle*Math.PI/180)
        ctx.drawImage(image,-this.w/2, -this.h/2, this.w, this.h)
        ctx.restore();
    }

    renderMaze(image)
    {
        ctx.save();
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.drawImage(image,-this.w/2, -this.h/2, this.w, this.h)
        ctx.restore();
    }

    renderMouse(image)
    {
        ctx.save();
        ctx.fillStyle = this.color
        ctx.translate(this.x, this.y)
        ctx.drawImage(image,-this.w/2, -this.h/2, this.w, this.h)
        ctx.restore();
    }

    //Moves an object by adding it's velocity to it's position on each axis
    move()
    {
        this.x = this.x + this.vx
        this.y = this.y + this.vy
    }

    //Each function below returns a sides of this object's bounding box
    top()
    {
        return {x:this.x, y:this.y - this.h/2};
    }
    bottom()
    {
        return {x:this.x, y:this.y + this.h/2};
    }
    left()
    {
        return {x:this.x - this.w/2, y:this.y};
    }
    right()
    {
        return {x:this.x + this.w/2, y:this.y};
    }

    /*-------Collision Function ----------------
    Used to check for collision between 2 objects
    This method checks to see where the various sides of one object are in relationship to another object's sides
    -------------------------------------------*/
    overlaps(_obj)
    {
        if(
            this.top().y < _obj.bottom().y &&
            this.bottom().y > _obj.top().y &&
            this.left().x < _obj.right().x &&
            this.right().x > _obj.left().x
        )
        {
            return true
        }
        return false;
    }
    isOverPoint(_point)
    {
        if(
            this.top().y < _point.y &&
            this.bottom().y > _point.y &&
            this.left().x < _point.x &&
            this.right().x > _point.x
        )
        {
            return true
        }
        return false; 
    }
}