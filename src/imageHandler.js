
function ConvertImage(imagePath){

    if (imagePath.files && imagePath.files[0]) {
        var reader = new FileReader();

        reader.onload = imageIsLoaded;
        reader.readAsDataURL(imagePath.files[0]);
    }

}

function imageIsLoaded(e){
    return e.target.result;
}

export default ConvertImage;