var values = ["äh", "ähm-äh", "ääähm", "ähm-äh-ähm", "ähhhhhhh...", "äh-ähm-ähm ähm", "ähm", "äh", "im Grunde genommen"]; 
var mostFrequent = "die, der, und, in, zu, den, das, nicht, von, sie, ist, des, sich, mit, dem, dass, er, es, ein, ich, auf, so, eine, auch, als, an, nach, wie, im, für".split(", ");
 function walk(node)
    {
    	if(node == null)
          return;
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )
        {
            case 1: // Element
            case 9: // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child )
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
        let newRandom = Math.floor(Math.random() * 20);
        let r = /([^\d])\.\s+([^\d])/;
        if(newRandom == 0)
        {
          v = v.replace(r, "$1, stellen Sie sich das mal, im Grunde genommen, vor. $2");
        }
        if(newRandom == 1)
        {
          v = v.replace(r, "$1. Schauen Sie sich mal die großen Flughäfen an. $2");
        }
        if(newRandom == 2)
        {
          v = v.replace(r, "$1, ohne dass Sie am Flughafen noch einchecken müssen. $2");
        }
        if(newRandom == 3)
        {
          v = v.replace(r, "$1, wissen Sie, äh, was ich, im Grunde genommen, meine? $2");
        }
        if(newRandom == 4)
        {
          v = v.replace(", ", ", meine Damen und Herren, ");
        }
        if(newRandom == 5)
        {
          v = v.replace(r, "$1. Sie werden feststellen, dass 10 Minuten Sie jederzeit locker in Frankfurt brauchen um Ihr Gate zu finden. $2"); 
        }
        if(newRandom == 6)
        {
          v = v.replace(",", ", weil das ja klar ist,");
        }
        if(newRandom == 7)
        {
          v = v.replace(r, "$1. Zehn. Minuten. $2");
        }
        if(newRandom == 8)
        {
          v = v.replace(r, "$1. Transrapid. $2");
        }
        if(newRandom == 9)
        {
          v = v.replace(r, "$1, meine Damen und Herren. $2");
        }
        if(newRandom == 10)
        {
          v = v.replace("wenn", "wenn Sie in Heathrow in London, äh ich meine in, Charles de Gaulle, eeh, wenn");
        }
    	if(newRandom == 11)
        {
          v = v.replace(",", ", bzw. schauen Sie sich mal die großen Flughäfen an,");
        }
        if(newRandom == 12)
        {
          v = v.replace(r, "$1. Flughafen. $2");
        }
        

        for(var i = 0; i < mostFrequent.length; i++) {
            let random = Math.floor(Math.random() * values.length);
            let randomBeforeAfter = Math.floor(Math.random() * 5);
            let regex = new RegExp("\\b(" + mostFrequent[i] + ")\\b", "gi");
            if(randomBeforeAfter == 0) {
                v = v.replace(regex, "$1 " + values[random]);
            }
            else if(randomBeforeAfter == 1) {
                v = v.replace(regex, values[random] + " $1");
            }
        }

        v = v.replace(" ist ", " ist im Grunde genommen ");
        v = v.replace("Deutschland", "Bayern");
        v = v.replace("Deutsch", "Bayrisch");
        v = v.replace("deutsch", "bayrisch");
        v = v.replace("Berlin", "München");
        v = v.replace(/bär/, "problembär");
        v = v.replace(/Bär/, "Problembär");
        v = v.replace("lodernde Glut", "gludernde Lod, ääh gludernde Flut äääääh, lodernde Flut");
        v = v.replace("aufrichte", "hinrichte, oder, oder, aufrichte");
        v = v.replace("Edmund Stoiber", "Ihre Majestät Stoiber der I.");
        
        textNode.nodeValue = v;
    }
    
walk(document.body);