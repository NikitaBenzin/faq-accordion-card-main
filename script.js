window.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelectorAll('.arrow'),
          h2 = document.querySelectorAll('h2'),
          elementInfo = document.querySelectorAll('.element-info'),
          card = document.querySelector('.card');


          let counter = 1;
    arrow.forEach( (a, i) => {

        a.addEventListener('click', () => {
            arrow.forEach( (r) => {
                r.classList.remove('rotate');
                a.classList.add('rotate');
            });
            card.classList.add('width90');
            card.classList.remove('width100');
            h2.forEach( (h, hi) =>{
                if(hi === i){
                    h.style.fontWeight = '700';
                    h.style.color = 'hsl(238, 29%, 16%)';
                    
                } else {
                    h.style.fontWeight = '400';
                    h.style.color = 'hsl(237, 12%, 33%)';
                    
                }
                elementInfo.forEach( (el, ei) => {
                    if(ei === i){
                        el.classList.remove('hide');
                        
                    } else {
                        el.classList.add('hide');
                    }
                });
            });

            if(counter === 2){
                arrow.forEach( (r, ri) => {
                    r.classList.remove('rotate');
                    h2.forEach( (h, hi) =>{
                        if(ri === hi){
                            h.style.fontWeight = '400';
                            h.style.color = 'hsl(237, 12%, 33%)';
                        }
                    });
                    elementInfo.forEach( (el, ei) => {
                        if(ei === ri){
                            el.classList.add('hide');
                        }
                    });
                });
                card.classList.add('width100');
                card.classList.remove('width90');
                counter = 0;
                
            }
            ++counter;

        });

    });







    /////////////////////////////////////////////////////////////////

    h2.forEach( (h, i) => {

        h.addEventListener('click', () => {
            h.style.fontWeight = '700';
            h.style.color = 'hsl(238, 29%, 16%)';

            h2.forEach( (hr) => {
                hr.style.fontWeight = '400';
                hr.style.color = 'hsl(237, 12%, 33%)';
                h.style.fontWeight = '700';
                h.style.color = 'hsl(238, 29%, 16%)';
            });
            card.classList.add('width90');
            card.classList.remove('width100');
            arrow.forEach( (a, ai) =>{
                if(ai === i){
                    a.classList.add('rotate');
                } else {
                    a.classList.remove('rotate');
                }
                elementInfo.forEach( (el, ei) => {
                    if(ei === i){
                        el.classList.remove('hide');
                        
                    } else {
                        el.classList.add('hide');
                    }
                });
            });

            if(counter === 2){
                h2.forEach( (h, hi) => {
                    h.style.fontWeight = '400';
                    h.style.color = 'hsl(237, 12%, 33%)'; 
                    elementInfo.forEach( (el, ei) => {
                        if(ei === hi){
                            el.classList.add('hide');
                        }
                    });
                });
                arrow.forEach( (r) => {
                    r.classList.remove('rotate');
                });


                card.classList.add('width100');
                card.classList.remove('width90');
                counter = 0;
            }
            ++counter;
        });
    });


});