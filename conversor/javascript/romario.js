
    function clique(){
    function programa ( ) {
        wib = window.document.getElementById("resps");
        duc = window.document
        
    var rom = ('');
    let endRd = [];
    let ram = [];
    let maskRd = [];
    let lom = ('');
    let primeip = [];
    let ultIp = [];
    let brodinho = [];

    let aa1 = duc.getElementById('oc1')
    let aa2 = duc.getElementById('oc2')
    let aa3 = duc.getElementById('oc3')
    let aa4 = duc.getElementById('oc4')
    
    

    let oct1 = (aa1.value)
    conversor(oct1)
    let oct2 = (aa2.value)
    conversor(oct2)
    let oct3 = (aa3.value)
    conversor(oct3)
    let oct4 = (aa4.value)
    conversor(oct4)
    let mask = ''
   
    
    function masca ( ) {
        maca = duc.getElementById('mask')
        mask = Number(maca.value)
        return mask

    }

    function mascaraRede( ){
            
            for (var i = 0; i < ram.length; i++) {
                if (i < mask) {
                    maskRd.push("1")
                    lom = lom + '1'
                } else {
                    maskRd.push("0")
                    lom = lom + '0'
                }
            }
            
            wib.innerHTML += '<b>'+'mascara de rede: '+'</b>'
            let deci1 = 0
            let deci2 = 0
            let deci3 = 0
            let deci4 = 0
            let oc1 = (maskRd.slice(0,8))
            let oc2 = (maskRd.slice(8,16))
            let oc3 = (maskRd.slice(16,24))
            let oc4 = (maskRd.slice(24,32))
            oc1.reverse()
            oc2.reverse()
            oc3.reverse()
            oc4.reverse()
            for (var i = 0; i < oc1.length; i++) {
                deci1 = deci1 + oc1[i] * (2 ** i)
            }
            for (var i = 0; i < oc2.length; i++) {
                deci2 = deci2 + oc2[i] * (2 ** i)
            }
            for (var i = 0; i < oc3.length; i++) {
                deci3 = deci3 + oc3[i] * (2 ** i)
            } 
            for (var i = 0; i < oc4.length; i++) {
                deci4 = deci4 + oc4[i] * (2 ** i)
            }

            wib.innerHTML += deci1+'.'+deci2+'.'+deci3+'.'+deci4+'<br>'

    
    }

    function endereRed( ){
        
        endRd = []

        for (var i = 0; i < ram.length; i++) {
    
        if(maskRd[i] == "1") {
            endRd.push(ram[i]);
        } else {
            endRd.push("0");
        }
    }
            let deci1 = 0
            let deci2 = 0
            let deci3 = 0
            let deci4 = 0
            let oc1 = (endRd.slice(0,8))
            let oc2 = (endRd.slice(8,16))
            let oc3 = (endRd.slice(16,24))
            let oc4 = (endRd.slice(24,32))
            oc1.reverse()
            oc2.reverse()
            oc3.reverse()
            oc4.reverse()
            for (var i = 0; i < oc1.length; i++) {
                deci1 = deci1 + oc1[i] * (2 ** i)
            }
            for (var i = 0; i < oc2.length; i++) {
                deci2 = deci2 + oc2[i] * (2 ** i)
            }
            for (var i = 0; i < oc3.length; i++) {
                deci3 = deci3 + oc3[i] * (2 ** i)
            } 
            for (var i = 0; i < oc4.length; i++) {
                deci4 = deci4 + oc4[i] * (2 ** i)
            }
            wib.innerHTML +='<b>'+'endereço de rede: '+'</b>'
            wib.innerHTML += deci1+'.'+deci2+'.'+deci3+'.'+deci4+'<br>'
    
    

    } 

    function primeiroIp( ){
        primeip = endRd;
        primeip.pop();
        primeip.push("1")

        let deci1 = 0
        let deci2 = 0
        let deci3 = 0
        let deci4 = 0
        let oc1 = (primeip.slice(0,8))
        let oc2 = (primeip.slice(8,16))
        let oc3 = (primeip.slice(16,24))
        let oc4 = (primeip.slice(24,32))
        oc1.reverse()
        oc2.reverse()
        oc3.reverse()
        oc4.reverse()
        for (var i = 0; i < oc1.length; i++) {
            deci1 = deci1 + oc1[i] * (2 ** i)
        }
        for (var i = 0; i < oc2.length; i++) {
            deci2 = deci2 + oc2[i] * (2 ** i)
        }
        for (var i = 0; i < oc3.length; i++) {
            deci3 = deci3 + oc3[i] * (2 ** i)
        } 
        for (var i = 0; i < oc4.length; i++) {
            deci4 = deci4 + oc4[i] * (2 ** i)
        }

        wib.innerHTML += '<b>'+'primeiro ip: '+'</b>'
        wib.innerHTML += deci1+'.'+deci2+'.'+deci3+'.'+deci4+'<br>'

        
        
        
    }

    function ultimoIp( ){
        ultIp = []

        for (var i = 0; i < ram.length; i++) {
    
        if(maskRd[i] == "1") {
            ultIp.push(ram[i]);
        } else {
            ultIp.push("1");
        }
    }

        brodinho = ultIp;
         wib.innerHTML += '<b>'+'broadcast: '+'</b>'
         let deci1 = 0
            let deci2 = 0
            let deci3 = 0
            let deci4 = 0
            let oc1 = (brodinho.slice(0,8))
            let oc2 = (brodinho.slice(8,16))
            let oc3 = (brodinho.slice(16,24))
            let oc4 = (brodinho.slice(24,32))
            oc1.reverse()
            oc2.reverse()
            oc3.reverse()
            oc4.reverse()
            for (var i = 0; i < oc1.length; i++) {
                deci1 = deci1 + oc1[i] * (2 ** i)
            }
            for (var i = 0; i < oc2.length; i++) {
                deci2 = deci2 + oc2[i] * (2 ** i)
            }
            for (var i = 0; i < oc3.length; i++) {
                deci3 = deci3 + oc3[i] * (2 ** i)
            } 
            for (var i = 0; i < oc4.length; i++) {
                deci4 = deci4 + oc4[i] * (2 ** i)
            }

            wib.innerHTML += deci1+'.'+deci2+'.'+deci3+'.'+deci4+'<br>'

         ultIp.pop();
         ultIp.push("0");
         wib.innerHTML += '<b>'+'ultimo ip: '+'</b>'
         deci1 = 0
         deci2 = 0
         deci3 = 0
         deci4 = 0
         oc1 = (ultIp.slice(0,8))
         oc2 = (ultIp.slice(8,16))
         oc3 = (ultIp.slice(16,24))
         oc4 = (ultIp.slice(24,32))
         oc1.reverse()
         oc2.reverse()
         oc3.reverse()
         oc4.reverse()
         for (var i = 0; i < oc1.length; i++) {
             deci1 = deci1 + oc1[i] * (2 ** i)
         }
         for (var i = 0; i < oc2.length; i++) {
             deci2 = deci2 + oc2[i] * (2 ** i)
         }
         for (var i = 0; i < oc3.length; i++) {
             deci3 = deci3 + oc3[i] * (2 ** i)
         } 
         for (var i = 0; i < oc4.length; i++) {
             deci4 = deci4 + oc4[i] * (2 ** i)
         }
 
         wib.innerHTML += deci1+'.'+deci2+'.'+deci3+'.'+deci4+'<br><br>'
 
       
    }

    


    function conversor (num ) {
        let numero = num
         num = parseFloat(numero);
        let binario = ''
        let correcao = [] 

        while(num > 0){ 
            if(num % 2 == 1) {
                binario = '1' + binario
                num = (num - 1) / 2            
            }
            if(num % 2 == 0) {
                binario = '0' + binario
                num = num / 2    
            }
            if (num < 1) {
                num = 0
            }
            
        }
        for (let unidade of binario){
            correcao.push(unidade)
        }
        if (correcao[0] == 0) {
            correcao.shift();
        }

        binario = ''

        for (let cont = 0; cont < correcao.length; cont++) {
            binario = (binario + "") + (correcao[cont] + "")
        }
        while(binario.length<8){
            binario = '0'+binario
        }
       rom = rom + binario
       for (var lam of binario) {
           ram.push(lam)
      }
    }

    let classe = ''
    if(oct1<128){
        classe = 'A'
    }else if(oct1>=128&&oct1<192){
        classe = 'B'
    }else if(oct1>=192&&oct1<223){
        classe = 'C'
    }else if(oct1>=224&&oct1<239){
        classe = 'D'
    }else if(oct1>=240&&oct1<=255){
        classe = 'E'
    }
    
    wib.innerHTML += '<b>'+'a classe é: '+classe +'</b>'+'<br>'

    
    masca();
    mascaraRede();
    endereRed();
    primeiroIp();
    ultimoIp();

}
    programa()
}