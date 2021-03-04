

const getImagen = async () => {
    try {
        const apiKey = 'HKS4K7UU9sKjCBfrEsHFOsQZvh7W0b8z';
        //con el await se espera a que la promesa termine 
        //para ejecutar la siguiente linea de codigo
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImagen();