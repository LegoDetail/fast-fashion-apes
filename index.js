
var globalIbounce =0;
var fastFashionShrinkHTML = function(totalHeight, startHeight, shrinkPercent, colorsToLoopThrough){
    var toPutString = "";
    var keepGoing = true;
    var currentSize = startHeight;
    var allSize = 0;
    var howManyWords = 0;
    var originalSizes = [];
    var originalColors = [];
    var localI = 0;
    while(keepGoing){
        toPutString += `<div class="fastFashionTitle" style="height: ${currentSize}vw;font-size: ${currentSize}vw;opacity: 0">Fast Fashion</div>`
        originalColors.push(colorsToLoopThrough[localI%colorsToLoopThrough.length]);
        originalSizes.push(currentSize);
        currentSize = currentSize * shrinkPercent;
        howManyWords++;
        localI++
        if(totalHeight < currentSize+allSize || currentSize <= .1){
            keepGoing = false;
        }
        //alert(`keepGoing: ${keepGoing}\ntoPutString: ${toPutString}`)
    }
    $(`#mainTitleContainer`).html(toPutString);
    
    
        
    var backOrForth = true;
    var bounceBackAndForth = function(){
        if(backOrForth){
            globalIbounce = 0;
        } else {
            globalIbounce = howManyWords;
        }
        var thisInterval = setInterval(function(){
            if(backOrForth){
                var thisSize = originalSizes[howManyWords-globalIbounce];
            } else {
                var thisSize = originalSizes[globalIbounce];
            }
            
            //$(`.fastFashionTitle:nth-child(${globalIbounce})`).html(`hola`);
            //alert(`size is ${thisSize} at i ${i}`)
            $(`.fastFashionTitle:nth-child(${globalIbounce})`).animate({height: `${thisSize}vw`},150, `swing`);
            $(`.fastFashionTitle:nth-child(${globalIbounce})`).animate({fontSize: `${thisSize}vw`},150, `swing`);
            
            if(backOrForth){
                globalIbounce++;
                if(globalIbounce>=howManyWords){
                    backOrForth = !backOrForth;
                    clearInterval(thisInterval);
                    setTimeout(bounceBackAndForth, 200)
                }
            } else {
                globalIbounce--
                if(globalIbounce<=0){
                    backOrForth = !backOrForth;
                    clearInterval(thisInterval);
                    setTimeout(bounceBackAndForth, 200)
                }
            }
            
        },150)
        
    }
    var thisInterval = setInterval(function(){
        $(`.fastFashionTitle:nth-child(${globalIbounce})`).animate({opacity: 1},150);
        globalIbounce++;
        if(globalIbounce>howManyWords){
            clearInterval(thisInterval);
            bounceBackAndForth();
        }
    },150)
    //bounceBackAndForth()
}

var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var vwtopx = function(vwInput){
    var WWidth = window.innerWidth;
    //alert(WWidth)
    var toReturn = WWidth * (vwInput/100);
    //alert(`${vwInput} -> ${toReturn}`)
    return toReturn
}

var genSVG = function(){
    var typeArray = ['problem', 'social', `economic`, `environmental`, `solution`];
    var colorArray = [`#fc3c3c`, `#3cd5fc`, `#3cfc8b`,`#fca23c`, `#ff99f6`];
    var pictureIcon = [`M ${vwtopx(4.2)} ${vwtopx(11.2)}
                        L ${vwtopx(9.8)} ${vwtopx(11.2)}
                        L ${vwtopx(9.8)} ${vwtopx(5.6)}
                        L ${vwtopx(11.2)} ${vwtopx(7)}
                        L ${vwtopx(12.6)} ${vwtopx(5.6)}
                        L ${vwtopx(9.8)} ${vwtopx(2.8)}
                        L ${vwtopx(8.4)} ${vwtopx(2.8)}
                        Q ${vwtopx(7)} ${vwtopx(4.2)},
                         ${vwtopx(5.6)} ${vwtopx(2.8)},
                        L ${vwtopx(4.2)} ${vwtopx(2.8)}
                        L ${vwtopx(1.4)} ${vwtopx(5.6)}
                        L ${vwtopx(2.8)} ${vwtopx(7)}
                        L ${vwtopx(4.2)} ${vwtopx(5.6)}
                        L ${vwtopx(4.2)} ${vwtopx(11.2)}`, 
                        
                       `M ${vwtopx(5.6)} ${vwtopx(12.6)}
                        L ${vwtopx(8.4)} ${vwtopx(12.6)}
                        L ${vwtopx(8.4)} ${vwtopx(4.9)}
                        L ${vwtopx(11.2)} ${vwtopx(5.6)}
                        L ${vwtopx(7)} ${vwtopx(1.4)}
                        L ${vwtopx(2.8)} ${vwtopx(5.6)}
                        L ${vwtopx(5.6)} ${vwtopx(4.9)}
                        Z`,
                        
                       `M ${vwtopx(11.2)} ${vwtopx(2.8)}
                        L ${vwtopx(8.4)} ${vwtopx(2.8)}
                        L ${vwtopx(8.4)} ${vwtopx(.7)}
                        L ${vwtopx(5.6)} ${vwtopx(.7)}
                        L ${vwtopx(5.6)} ${vwtopx(2.8)}
                        L ${vwtopx(2.8)} ${vwtopx(2.8)}
                        L ${vwtopx(2.8)} ${vwtopx(4.2)}
                        L ${vwtopx(5.6)} ${vwtopx(4.2)}
                        L ${vwtopx(5.6)} ${vwtopx(6.3)}
                        L ${vwtopx(4.2)} ${vwtopx(6.3)}
                        L ${vwtopx(4.2)} ${vwtopx(4.2)}
                        L ${vwtopx(2.8)} ${vwtopx(4.2)}
                        L ${vwtopx(2.8)} ${vwtopx(7.7)}
                        L ${vwtopx(5.6)} ${vwtopx(7.7)}
                        L ${vwtopx(5.6)} ${vwtopx(9.8)}
                        L ${vwtopx(2.8)} ${vwtopx(9.8)}
                        L ${vwtopx(2.8)} ${vwtopx(11.2)}
                        L ${vwtopx(5.6)} ${vwtopx(11.2)}
                        L ${vwtopx(5.6)} ${vwtopx(13.3)}
                        L ${vwtopx(8.4)} ${vwtopx(13.3)}
                        L ${vwtopx(8.4)} ${vwtopx(11.2)}
                        L ${vwtopx(11.2)} ${vwtopx(11.2)}
                        L ${vwtopx(11.2)} ${vwtopx(9.8)}
                        L ${vwtopx(8.4)} ${vwtopx(9.8)}
                        L ${vwtopx(8.4)} ${vwtopx(7.7)}
                        L ${vwtopx(9.8)} ${vwtopx(7.7)}
                        L ${vwtopx(9.8)} ${vwtopx(9.8)}
                        L ${vwtopx(11.2)} ${vwtopx(9.8)}
                        L ${vwtopx(11.2)} ${vwtopx(6.3)}
                        L ${vwtopx(8.4)} ${vwtopx(6.3)}
                        L ${vwtopx(8.4)} ${vwtopx(4.2)}
                        L ${vwtopx(11.2)} ${vwtopx(4.2)}Z`, 
                        
                        `M ${vwtopx(6.3)} ${vwtopx(12.6)}
                        L ${vwtopx(7.7)} ${vwtopx(12.6)}
                        Q ${vwtopx(9.8)} ${vwtopx(12.6)},
                          ${vwtopx(10.5)} ${vwtopx(11.2)}
                        Q ${vwtopx(7.7)} ${vwtopx(10.5)}
                          ${vwtopx(7.7)} ${vwtopx(12.6)}
                        Q ${vwtopx(9.1)} ${vwtopx(9.8)},
                           ${vwtopx(7.7)} ${vwtopx(5.6)}
                        Q ${vwtopx(11.9)} ${vwtopx(7.7)},
                          ${vwtopx(9.8)} ${vwtopx(3.5)}
                        Q ${vwtopx(11.9)} ${vwtopx(-.7)},
                          ${vwtopx(7.7)} ${vwtopx(1.4)}
                        Q ${vwtopx(7)} ${vwtopx(2)},
                          ${vwtopx(6.3)} ${vwtopx(1.4)}
                        Q ${vwtopx(2.1)} ${vwtopx(-.7)},
                          ${vwtopx(4.2)} ${vwtopx(3.5)}
                        Q ${vwtopx(2.1)} ${vwtopx(7.7)},
                          ${vwtopx(6.3)} ${vwtopx(5.6)}
                        L ${vwtopx(7)} ${vwtopx(5)}
                        Q ${vwtopx(4.9)} ${vwtopx(5)}
                          ${vwtopx(4.9)} ${vwtopx(3.5)}
                        Q ${vwtopx(4.9)} ${vwtopx(2)}
                          ${vwtopx(7)} ${vwtopx(2)}
                        Q ${vwtopx(9.1)} ${vwtopx(2)} 
                          ${vwtopx(9.1)} ${vwtopx(3.5)}
                        Q ${vwtopx(9.1)} ${vwtopx(5)}
                          ${vwtopx(7)} ${vwtopx(5)}
                        L ${vwtopx(6.3)} ${vwtopx(5.6)}
                        Q ${vwtopx(7.7)} ${vwtopx(9.8)},
                          ${vwtopx(6.3)} ${vwtopx(12.6)}
                        Q ${vwtopx(3.5)} ${vwtopx(12.6)}
                          ${vwtopx(2.1)} ${vwtopx(7)}
                        Q ${vwtopx(6.3)} ${vwtopx(8.4)}
                          ${vwtopx(6.3)} ${vwtopx(12.6)}
                        `, 
                        
                        `M ${vwtopx(9.8)} ${vwtopx(5.6)}
                        Q ${vwtopx(7)} ${vwtopx(2.8)},
                          ${vwtopx(4.2)} ${vwtopx(5.6)}
                        L ${vwtopx(5.6)} ${vwtopx(7)}
                        L ${vwtopx(1.4)} ${vwtopx(7)}
                        L ${vwtopx(1.4)} ${vwtopx(2.8)}
                        L ${vwtopx(2.8)} ${vwtopx(4.2)}
                        Q ${vwtopx(7)} ${vwtopx(0)}
                          ${vwtopx(11.2)} ${vwtopx(4.2)}
                        L ${vwtopx(9.8)} ${vwtopx(5.6)}
                        L ${vwtopx(8.4)} ${vwtopx(7)}
                        L ${vwtopx(12.6)} ${vwtopx(7)}
                        L ${vwtopx(12.6)} ${vwtopx(11.2)}
                        L ${vwtopx(11.2)} ${vwtopx(9.8)}
                        Q ${vwtopx(7)} ${vwtopx(14)}
                          ${vwtopx(2.8)} ${vwtopx(9.8)}
                        L ${vwtopx(4.2)} ${vwtopx(8.4)}
                        Q ${vwtopx(7)} ${vwtopx(11.2)}
                          ${vwtopx(9.8)} ${vwtopx(8.4)}
                        L ${vwtopx(8.4)} ${vwtopx(7)}
                        `]


    //var testCircle = problemTopSvg.circle(vwtopx(50),vwtopx(12.5),vwtopx(12.5));
    //var difcirc = problemTopSvg.circle(683, 170.75, 170.75)
    var topPath = ` M 0 ${vwtopx(25)} 
                    Q ${vwtopx(50)}, ${vwtopx(14)}
                      ${vwtopx(100)}, ${vwtopx(18.75)}
                    L ${vwtopx(100)} ${vwtopx(25)}`
    var bottomPath = `M 0 0 
                    L 0 ${vwtopx(6.25)}
                    Q ${vwtopx(50)}, ${vwtopx(11)}
                      ${vwtopx(100)}, ${vwtopx(0)}
                    L ${vwtopx(100)} ${vwtopx(0)}`
    var topPathM = ` M 0 ${vwtopx(25)} 
                    L ${vwtopx(0)} ${vwtopx(18.75)}
                    Q ${vwtopx(50)}, ${vwtopx(14)}
                      ${vwtopx(100)}, ${vwtopx(25)}
                    `
    var bottomPathM = `M 0 0 
                    Q ${vwtopx(50)}, ${vwtopx(11)}
                      ${vwtopx(100)}, ${vwtopx(6.25)}
                    L ${vwtopx(100)} ${vwtopx(0)}`
    for(var i=0;i<typeArray.length;i++){
        console.log(`making ${typeArray[i]} svg stuff`)
        var thisTopSvg = Snap(`#${typeArray[i]}TopSvg`);
        var thisBottomSvg = Snap(`#${typeArray[i]}BottomSvg`);
        var pictureSVG = Snap(`#${typeArray[i]}SVG`);
        pictureSVG.clear()
        
        thisTopSvg.clear();
        thisBottomSvg.clear()
        if(i%2==0){
            var topPathToUse = topPath;
            var bottomPathToUse = bottomPath;
        } else {
            var topPathToUse = topPathM;
            var bottomPathToUse = bottomPathM;
        }
        var thisTopPath = thisTopSvg.path(topPathToUse);
        var thisBottomPath = thisBottomSvg.path(bottomPathToUse);
        
        var problemShirtPath = pictureSVG.path(pictureIcon[i])
        //var testPath = problemTopSvg.path(`M 0 341 L 1366 0`);
        thisTopPath.attr({
            fill: colorArray[i]
        })
        thisBottomPath.attr({
            fill: colorArray[i]
        })
        problemShirtPath.attr({
        fill: `white`
    })
        console.log(`made ${typeArray[i]} svg with color: ${colorArray[i]}`)
    }
    
    
    
    
                                                
    
}

var errorAlert = function(message, source, lineno, colno, error){
    alert(message)
}

var setTitle = function(newTitle){
    $(`head title`).html(newTitle);
}

var iteration = 0;

var randomString = function(length){
    var newString = ``;
    for(var i =0; i<length;i++){
        //alert(iteration)
        var randomVal = noise.perlin2(iteration/70, i/70)
        var newNumber = Math.round(25*Math.abs(randomVal))
        newString += alphabetArray[newNumber];
    }
    return newString;
}

var randomTitle = function(){
    setTitle(randomString(10));
}



var onLoad = function(){
    window.onerror = errorAlert;
    genSVG()
    noise.seed(Math.random())
    // var titleInterval = setInterval(function(){
        
    //     randomTitle();
    //     iteration++;
    // },50)
    
}

var resizeWindow = function(){
    genSVG()
    
}

window.addEventListener('resize', resizeWindow)
window.addEventListener('load', onLoad);