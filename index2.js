            
            
            const input = document.getElementsByTagName('input');
            const textarea = document.querySelector('.textDiv');
        


                input[0].addEventListener('input', () => {
                    input[0].parentElement.classList.add('open');
                    
                    if (input[0].value == '') {
                        input[0].parentElement.classList.remove('open');
                     }
                });
                input[1].addEventListener('input', () => {
                    input[1].parentElement.classList.add('open');
                    
                    if (input[1].value == '') {
                        input[1].parentElement.classList.remove('open');
                     }
                });
                input[2].addEventListener('input', () => {
                    input[2].parentElement.classList.add('open');
                    
                    if (input[2].value == '') {
                        input[2].parentElement.classList.remove('open');
                     }
                });
                input[3].addEventListener('input', () => {
                    input[3].parentElement.classList.add('open');
                    
                    if (input[3].value == '') {
                        input[3].parentElement.classList.remove('open');
                     }
                });
               
        