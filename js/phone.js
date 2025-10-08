const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('Phone-container');
    // clear the container
    phoneContainer.textContent = '';


    // disable show all button if there are more trhan 15 phones
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 15 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    console.log('is show all', isShowAll);
    // display 15 phones only
    if(!isShowAll){
        phones = phones.slice(0, 15);
    }


    phones.forEach(phone => {
        console.log(phones);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card m-4 bg-gray-100 p-8  shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>`;
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading
    toggleLoadingInfinity(false);
}

// handle serch button
const handleSearch = (isShowAll) => {
    toggleLoadingInfinity(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    loadPhone(searchText, isShowAll);
}

const toggleLoadingInfinity = (isloading) =>{
    const loadingInfinity = document.getElementById('loading-infinity');
if(isloading){
    loadingInfinity.classList.remove('hidden');
}
else{
    loadingInfinity.classList.add('hidden');
}
}

// handle show all
const handleShowAll = () =>{
    handleSearch(true);
}

// loadPhone();