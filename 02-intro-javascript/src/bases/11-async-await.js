//const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasd.com'));    

//getImagenPromesa().then(console.log);


const getImage = async() => {

    try {
        const apiKey = 'wkj7BfYA408HcIIDNrw8c7WseXtE2yNX';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        //manejo del error
        console.error(error)
    }

}
getImage();

