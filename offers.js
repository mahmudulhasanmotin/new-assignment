

// coupon apply function heer

const applyBtn = document.getElementById('coupon-btn');
applyBtn.addEventListener('click',function(){
    let couponInput = document.getElementById('coupon-input').value;
    if(couponInput === 'NEW15'){
        const discountAmount = document.getElementById('discount-amount');
        discountAmount.classList.remove('hidden'); 
        const totalAmount =document.getElementById('total-price').innerText;
        const discountAmountCart = totalAmount / 100; 
        const final = discountAmountCart * 15;
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = final;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalAmount - final;
        alert('Welcome ,You got 15% Discount');
    }
    else if(couponInput === 'Couple 20'){
        const discountAmount = document.getElementById('discount-amount');
        discountAmount.classList.remove('hidden'); 
        const totalAmount =document.getElementById('total-price').innerText;
        const discountAmountCart = totalAmount / 100; 
        const final = discountAmountCart * 20;
        const discountPrice = document.getElementById('discount-price');
        discountPrice.innerText = final;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalAmount - final;
        alert('Welcome ,You got 20% Discount');
    }
    else{
        alert('Please enter Valid Coupon')
    }
});

