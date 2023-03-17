let fabric_canvas;
window.onload = function() {
    fabric_canvas = new fabric.Canvas(document.getElementById("canvas1"), {
        backgroundColor: 'white'
    });
}

function dragImage(e) {
    e.dataTransfer.setData("id", e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function dropImage(e) {
    e.preventDefault();

    let data = e.dataTransfer.getData("id");
    let htmlImgDragged = document.getElementById(data);
    
    let fabric_img = new fabric.Image(htmlImgDragged, {
        left: e.layerX - 40,
        top: e.layerY - 80,
    });
    fabric_img.scaleToWidth(htmlImgDragged.width);
    fabric_img.scaleToHeight(htmlImgDragged.height);

    fabric_canvas.add(fabric_img);
}