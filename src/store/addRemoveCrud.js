import { crudurl } from "./crudurl";


export const fecthing = async () => {

    let uniq = localStorage.getItem('email').replaceAll('.', '');

    uniq = uniq.replaceAll('@', '')
    console.log('fetching ', uniq)

    
    const res = await fetch(`${crudurl}/cart${uniq}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('error')
    }
}


export const posting = async (item) => {
    let uniq = localStorage.getItem('email').replaceAll('.', '');

    uniq = uniq.replaceAll('@', '')
    console.log('fetching ', uniq)
    try {
        const res = await fetch(`${crudurl}/cart${uniq}`, {
            method: 'POST',
            body: JSON.stringify({
                id: item.id,
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('error')
        }
    } catch (err) {
        // console.log(err);
        throw new Error('error')
    }
}

export const deleting = async (_id) => {
    let uniq = localStorage.getItem('email').replaceAll('.', '');

    uniq = uniq.replaceAll('@', '')
    console.log('fetching ', uniq)
    try {

        const res = await fetch(`${crudurl}/cart${uniq}/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            return res;
        } else {
            throw new Error('error')
        }
    }
    catch (err) {
        // console.log(err);
        throw new Error(err)
    }

}