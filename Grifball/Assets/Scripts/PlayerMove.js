//This script checks for keyboard input and moves the player accordingly (WASD)
//Coded by Matt K
//Created 10/2/2012, Last Updated 10/3/2012 by Matt K
//BUG: If player tries to move into a wall while in the air, gravity's effect is greatly reduced

var speed = 1;
var jumpSpeed = 3;
var isGrounded = true;
var newSpeed : float;
var previousVelocity : float;

function Update () {

	//Limits diagonal speed to prevent faster movement in diagonal directions
	if (Input.GetAxis("Horizontal") != 0 && Input.GetAxis("Vertical") != 0) {
		newSpeed = speed * Mathf.Sqrt(2.0f) / 2;
	}
	else newSpeed = speed;
	
	//Checks if movement keys are pressed and adds the appropriate force to the object to be moved
	//Default Horizontal axis keys are A/D and left/right arrow keys
	//Default Vertical axis keys are W/S and up/down arrow keys
	rigidbody.AddForce(Vector3(Input.GetAxis("Horizontal")*newSpeed,0,Input.GetAxis("Vertical")*newSpeed));
	
	//Limit maximum speed
	if(rigidbody.velocity.x > speed) {
		rigidbody.velocity.x = speed;
	}
	else if (rigidbody.velocity.x < -speed) {
		rigidbody.velocity.x = -speed;
	}
	
	if(rigidbody.velocity.z > speed) {
		rigidbody.velocity.z = speed;
	}
	else if (rigidbody.velocity.z < -speed) {
		rigidbody.velocity.z = -speed;
	}
	
	if ((rigidbody.velocity.y < 0.01 && rigidbody.velocity.y > -0.01) && (previousVelocity <= 0 || (previousVelocity < 0.01 && previousVelocity > -0.01))) isGrounded = true;
	else isGrounded = false;
	//If spacebar has been pressed, jump
	if(Input.GetButton("Jump") && isGrounded) {
		rigidbody.velocity.y = jumpSpeed;
		isGrounded = false;
	}
	previousVelocity = rigidbody.velocity.y;
	
}