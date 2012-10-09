//This script rotates the object so that it faces the current position of the mouse
//Coded by Matt K
//Created 10/2/2012, Last updated 10/3/2012 by Matt K

var cam : Camera;
var MouseX : float;
var MouseY : float;
var MouseInWorldPos : Vector3;
var LookDirection : Vector3;
var CameraDistance : float;

function Update () {
	
	MouseX = Input.mousePosition.x;
	MouseY = Input.mousePosition.y;
	CameraDistance = cam.transform.position.y - transform.position.y;
	MouseInWorldPos = cam.ScreenToWorldPoint(Vector3(MouseX,MouseY,CameraDistance));
	LookDirection = Vector3(MouseInWorldPos.x,transform.position.y,MouseInWorldPos.z);
	
	transform.LookAt(LookDirection);
	
}