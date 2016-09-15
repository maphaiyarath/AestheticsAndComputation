#include "ofApp.h"

// REFERENCE #1: camera ribbon example by james george
// found in openframeworks 3d examples folder

// INSPO #1: star trek warp speed
// INSPO #2: hyper light drifter
// INSPO #3: bloom by beach house
// INSPO #4: sketchy motion blur

// ribbon falling from any angle? move cam
// ribbon moving super fast? blur

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetFrameRate (60);
    ofBackground (0);
    ofSetVerticalSync(false);
    inUse = false;
}

//--------------------------------------------------------------
void ofApp::update(){
    if (inUse) {
        ofVec3f sum (0, 0, 0);
        for (int i = 0; i < points.size(); i++) {
            float newPt = ofNoise(points[i]);
            points[i].z -= 4;
            sum += points[i];
        }
        center = sum / points.size();
    }
    
}

//--------------------------------------------------------------
void ofApp::draw(){
    if (inUse) {
        cam.begin();
    }
    
    ofSetColor (255);
    
    // drawing style will be white speckles
    mesh.setMode (OF_PRIMITIVE_POINTS);
    for (int i = 1; i < points.size(); i++)
    {
        // find points
        ofVec3f currPt = points[i - 1];
        nextPt = points[i];
        
        // get direction ribbon is moving
        ofVec3f dir = nextPt - currPt;
        
        // distance btwn pts
        float distance = dir.length();
        
        // get normalized direction
        ofVec3f normDir = dir.getNormalized();
        
        // get left / right norm directions
        ofVec3f left = normDir.getRotated(-90, ofVec3f(0, 0, 1));
        ofVec3f right = normDir.getRotated(90, ofVec3f(0, 0, 1));
        
        // longer distance = narrower line
        float strokeWeight = ofMap (distance, 0, 100, 25, 2.5, true);
        
        // point math
        ofVec3f leftPt = currPt + left * strokeWeight;
        ofVec3f rightPt = currPt + right * strokeWeight;
        
        // get 'continuous' movement by drawing points
        mesh.addVertex (ofVec3f (leftPt.x, leftPt.y, leftPt.z));
        mesh.addVertex (ofVec3f (rightPt.x, rightPt.y, rightPt.z));
    }
    mesh.draw();
    
    if (inUse) {
        cam.end();
    }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    // switch btwn create and view modes
    inUse = !inUse;
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    if (inUse) {
        // create mode
        float rot = ofMap (ofGetMouseX(), 0, ofGetWidth(), 0, 360);
        ofVec3f farPt;
        if (points.size() > 0) {
            farPt = points[0];
        } else {
            farPt = ofVec3f (x, y, 0);
        }
        ofVec3f farDir = farPt - center;
        ofVec3f farDirRot = farDir.getRotated (rot, ofVec3f (0, 1, 0));
        cam.setPosition (center + farDirRot);
        cam.lookAt (nextPt);
    } else {
        // view mode
        ofVec3f cursor (x, y, 0);
        points.push_back(cursor);
    }
    
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){
    
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
    
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
    
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){
    
}
