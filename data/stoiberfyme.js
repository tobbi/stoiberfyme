var values = ["äh", "ähm-äh", "ääääääähm", "ähm-äh-ähm", "ähhhhhhh...", "äh-ähm-ähm ähm", "ähm"]; 
var mostFrequent = "die, der, und, in, zu, den, das, nicht, von, sie, ist, des, sich, mit, dem, dass, er, es, ein, ich, auf, so, eine, auch, als, an, nach, wie, im, für".split(", ");
 function walk(node)
    {
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

        for(var i = 0; i < mostFrequent.length; i++) {
            let random = Math.floor(Math.random() * values.length);
            let randomBeforeAfter = Math.floor(Math.random() * 2);
            let regex = new RegExp("\\b(" + mostFrequent[i] + ")\\b", "gi");
            if(randomBeforeAfter) {
                v = v.replace(regex, "$1 " + values[random]);
            }
            else {
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
        
        textNode.nodeValue = v;
    }
    
walk(document.body);