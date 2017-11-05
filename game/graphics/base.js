'use strict';

/**
* All the base drawing functions, such as rect, circle, text, image...
*/

function fillStyle(str) {
    ctx.fillStyle = str;
}


function strokeStyle(str) {
    ctx.strokeStyle = str;
}


function rect(x, y, wid, hei) {
    ctx.fillRect(x,y,wid,hei);
}

function strokeRect(x, y, wid, hei) {
    ctx.strokeRect(x,y,wid,hei);
}


function circle(x, y, radius) {
    ctx.arc(x, y, radius, 0, Math.TWO_PI);
    ctx.fill();
    ctx.stroke();
}


function stroke(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


function image(image, x, y, filter) {
    if(filter) {
        ctx.drawImage(filter(image), x, y);    
    } else {
        ctx.drawImage(image, x, y);
    }
    
}


function text(str, x, y) {
    ctx.fillText(str, x, y)
}


function textStyle(str) {
    ctx.font = str;
}

function textAlign(vertical, horizontal) {
    ctx.textAlign = vertical;
    ctx.textBaseline = horizontal;
}


function setBackground(image, filter) {
    if(filter) {
        background.drawImage(filter(image), 0, 0);
    } else {
        background.drawImage(image, 0, 0);
    }
    
}