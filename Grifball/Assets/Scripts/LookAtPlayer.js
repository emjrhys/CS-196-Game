//This script allows a Unity Camera to look at a target without rotating
//Coded by Matt K
//Created 10/2/2012, Last Updated 10/4/2012 by Matt K
//Note: Currently this moves the camera to move along with the target without rotating, which causes issues with court walls
//occasionally.  Setting it to just rotate along the z(?)-axis or eliminating this script entirely should be considered

var target : Transform; 

var relativePosition : Vector3;

 

function Start() {

    relativePosition = target.transform.position - transform.position;

}

 

function Update () {

    transform.position = target.transform.position - relativePosition;

}