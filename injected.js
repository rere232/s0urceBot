



function getTextForHash(hash) {
    const hashTextMap = {
        "WYjPURQH8I8tyU6WlJ08kKJEmVEeSIosRZQlJJPEPAyFlDVL1kJZSskeEUU8yIOtZvKAB0K2ZM++ZevWGf38zH8ecOo+/O49v3u+53u+51z+tEZoj67ojs7+v/XAGZzDJZRjcnU/1MYufMePWKf+AcACbMaQ3H5/fMvESGseahS6qAhf8AY3": "fail",
        "TUtXURAG8B+mZUoEQhujnbhQbBdIIbSIkN4+SrRyoagoRIZRRIF+hjatpVVQ0QtEi4hWURGo+IZgqZUVA/OHw0FbZQMD98w895l7n5k5/Fs7jhd4hid4jGv20brwu/BfuL+fBQ/hFE5jBj9xz3+wAxjGD9ytk+fwHa+LWBtW8TnPzbiKT/iA": "url",
        "yavPYRQG8M81h1xJlCGSbq4MiVyKjbEbWZiSLCgJC3+AspXVLStkWNw1EhnCggUZQlmYXUNZoIhrvMaOzlevXz9rTr39+n3f9z3neZ/nOYc/owF78B0/cp3yH8QsfEMX3uI1Dibgfxor8RW70M1/EN3QA6uTrf0YiEb0zzOxPxTDMCJ/I0Zi": "free",
        "a2iPYRjGf2Nmc2pyHNM2WiOHaGmiKEotlA/DUPs0h8YYzYoJKaVEmXwgOS3LMUR8cMohckor55hDhLQx5vQfo3tdb929/Q31d9fb2vs87/3c93Vd9/X8IXqkAS+BC/yfKAFWAMkt7OkG5AN5wGRgApARqwIygSbgPrGPVsAj4PsfCh4N/HTP": "double",
        "W0oDQRCsiHqPRATPYOKPh9B4D10PIuYm0fUiIrvxHCYxWaWgaikHIeBXPmxokurXVM90L7Bf8grgA8AQeyYLAN0/sb/eWCulTABsATwJTwFsAIwjuZGN+gngtig+B7CWrgBcSfl/GXFj4aXm6rwkVosMpZKjLfBIeCP8Je1ke4gD68J/pwaM": "word",
        "SytEYRjHfy4jym3DEsd9LcrCtXwEjYQsWNtZ+Q4WFvIVrFmM7GxlJWymrCglJDOYqx79z/T0RqyYf711zjvP5Xfe/3POwN8rAkpAmipSVK1QRUHV/CbBgmqBuiChFmgAEkFsk5ZXPdACtAJtQHuQ56EstgPo1KqoAJSBAXdta1kwpgUVSjnY": "push",
        "S2qCQRCEPwkJCDFnMAsP4N5scgRXBkXEEwg+QLyEYDaewbUJuYdLD+FjYeLjV0pqsJE0NDNTU9PTVQ23WAIZcHYOgYdwr33zjqNsA4+JlDmPwAHY+zwFcuZ8GNsBG2ANrLxWRegDJ+A7PHp1wQwoGZv43AIKzhdzrzE3QT/GiHgO6AB//0gr": "os",
        "2auWZRQF8J+oOQYOOeVQjoVR5pCieJFeZQZehDgjigjpH5BRJCjdKIKodOFFCIZ2E0JoQoKamAWldiGYYGJOpXnCSklNUfZhffBy/oKz4YXvfb79rmfvtdbedK6YjKl4RieKrriIRxitE0UP/Ir/8KJOFH1xCf80C+uNj9CGP3AFZ/Bah4/7": "send",
        "S8iPaRgG8B+GYYxDmEikphDqWymTkUGooSwUEptJQ06ZBV9qtqKsJrHAAqXYWIihhlCEsiCKmHIYNSjJIeIbh+nR9c/T22c2w1Xv4r2f67nv6z49fEAv9MEADNQ5xmECJmEKRlRnXTAbi9AXP2MFVmN8xVmDDfih4ftH7EZ7yzASb/Eu3y0M": "copy",
        "W4hPURQG8J/7JbeEXMslSoRiRAmhlEhRxAOSQhTK3YsyDC+jeEDxIDQeRErzaFJSRISivLiEMSFyzW20tY52JzQvU1bt/v3X/s5a3/m+tQ7/T7TABuxG9+ZuNguLMaKJ+Af4gcHNzMuTaLQLLZuAvxf4Yc1N7AROYlkTid3FdwwvEq3QpgRq": "void",
        "S4jPYRTG8Q9yz2VC5G5WyigLhexkP6Uot1BGLrGiLGRCSTZi51JTSmZBiqzslIWUnQ251sjICLmN2+idnn+9/WM3nHrr1+l3zvO+3+cc/h538Aw7/IdoxXf8wP5/ITAaD/AefXiDL5iDSRiBDtzDZmzBbdzCrqrPLHSjq8qV2k6cREtJjMdD": "gnu",
        "W6hWVRQF4K9OF7HSzK5GR/JWCkaiRmRSUBH12osPESqKqWSCoD1EoAapQSVd7PYQaPRUIoVBecEHISKiBw0N6SQczdIMrSzNOrFk/LLc7CQhz4AFm3/Pf84xxxxzbc5EFy7HlRiKa50bRuFe3I8H8RAG6ic8hr/RV51zwast/x+hn/An/sJh": "false",
        "SQiPYRAG8J99lyXCgZIsRXJAKAqFQpycHCyFkgMlEeWAg70cpFBSUg5SlKUoLjhwkZLsXJR9z9Zbz1+vL6bm8M07yzPPzHxwH1/xAa8xEavwEJf8LXtwBRdxFiv9W/ZhJ7Zja+NtHlZgTMNevmdhhID6Ff2OdXiLn7ibgHY4HdAt35+JXVYl": "recv",
        "y4uPcRTH8dcM4y6FQiFkxYKVbKZckgjFxm7W5JLrP+BfmJXrbKZRUq4bKwvC5JKSEMalCJHcb2Po1Jl6enp+z2+YU9/N93y+z/f9fM75HniEfsw1/DiNXlzFZRyv0CzAGZzCSZzA+rLoX6E25Jl7pf3W3P+TawAPKs63FzSxfmNfFdTPIUK1": "kill",
        "SWxNcRTGf69zqbFCvFISak7LAg2JGKI0KKLamoOiNiIWtashFQvE0IihxkUjEemrkoZEY15IDK0QJKyEncRYPOXJSb6b/HvzXmvxnOTmJfd/3jnnO+f7zv8CrAD+6DeeNhy4q9gRPVN9PmlApc/nOJAe51pYDvwGVsYxZgDYqeJfAy3AY2C8": "buffer",
        "iw2CUAzscxNdA/aQRWATGUXfLOIo8jA1veTS8PhqtMkl8K65d9CryPeqEZEkIoPhsVUIItVOQyfTUvSG+xahIwnVO00VphPlDyoYSjIVCGO9o3ztZj+YaO7LS+r3OfE6DO4NpsX9LRuDKcaUqeTAI0J+0kymOsf1U+PuZkwlOjvTl67JVGWc": "info",
        "vy/eURTH8RctGpESRtqEiMHQmfrRoTEYbO3gLzBY/BvdLB38TOpvMBrM3TGoBoOhVKRBUFq5T86N+3zzOMlJ7s393Pu5530OTzGLf/gfuYSW4rwJ7yqalOvoKHSd+NZA9wEvs+hrCO5xi5vYL6M5NIN4iLNznOEUv/GlMFyNuyc4wiF+xvpt": "css",
        "yypGYRSGH6ekHItiRESklJyijJQwUEZKGSkDA3eguABDboAMRAk3YCIDMVAY0K/+ECFKjjm09Kpl2//2Y9Ue7L2f/b7fXt+7Pki+poBX4M1d5RF8FtAL9AGF/KHGgX1g1xlXRvDVwLO4LiCFf9S9hEw0UdUAC8Ai0B5mmKo25AD5QHaE2K0M": "cli",
        "24tOYRQG8N84zDiNRtNIzodcuOIGOZRcSDTM0KRwIZnEBck/IHfiCuVGORQXoqQmUaQIKYerUWocihzSOB/GcfTW2rXbfbP7pDSrdl977ed93mc971rvB134iSn6UXT9hai5eILdJZgaHMANjP0XUd+rEFWDRfiFgyW4gbhYJWef8RA9VRAM": "http",
        "TSvmYRTGf3jGSGrIyjQzhawmZkNCTUYT0rNgoSShLJT9+AJKNhOKhZmJhaZmKwusmD1JSsl7SBJCxvtLZ+b615n7C3DV3fP8zzn3Ode5zrkBHnTygHv33QIk8Q9lgW8VSAc2ZO9UXBrQGMTaiQPJivkh/1f+xy/Zv9jHnS7eAlfAhf5bQIUu": "prev",
        "XciPdxgH8I9h2OZ1T2oHk1qRSThA5oBST9Rk3qJFEtrBDhzIEUU5eBwICfWUAwd6eqJNm62MtUOtEKVEtLzEyuN1Nu9v/fS96+7ur3aiXPXr7v69XC/f7/e6+P+2GC/xqraWeA/sa1zCRfybJL9FL++RHcYLLMUH7zpYCdAfH2MQhqLvW+7+": "slow",
        "SaiOYRgG4Es4EqWQMUMyRGZKIhYKUTKsyJRMITk7ZSNhY6GwMGfOFFHqJGXOgoUhZcxQpgxlToSe0/PX1++cszvlrnfxf9/zv+/93Pf9vB//ogW6oif6obv/AI2wB7/xJ1dVPZ7XATewHQ3qKhyJH/iEe7iFLUm4PhDOfMdZVNRVOA3fsANN": "fast",
        "S4jIURQG8J83SWSBpiSlPEoWxMIrs7ERJUkWkwU7hmEQahZYWFtgaSF7JRZIHlFEKZSFvN+UN8N4dOr86ySzsFBz6y7+93/ud77zfedc/v9ag+to04fWNvzEVn1k9cN2/ECnPrL6Ywe+Y8u/VjMlL3bjM679JW4wruAZnuA+1v0RMwincBs3": "code",
        "S4iIYRgF4AfjTogktxkbxUJkYWMvy0nKjpSFjZHsJuWytiKS7CzsxEJJWVBSLk2U+yUzJcn9Pm6jdzp//c1iVvjqr/97O993znve8/H31xL8xqN/cPeopL9COuZ/kv4I6bjRgKVobP4LOBnjs6//WSPw87AAi9CJaSNIB0M6AyuwCqsxvQF1": "web",
        "S6hQVRQG4K8npWKmYYlkiThQ0SupSZYDRWtQk3w7kaaiI8EswbzgoxR7iOFj0ERQJG9CSmYIDhQfowxF6CUm5ossH4FZpje2/EcOh+tAMfSHzeHsvfZa/17rX4s7wwN4GVMx1n2G3biOHe4zrMRGzMVD/2egR/Eknsaz6JWS1TEar+INTMA0": "ajax",
        "y4vPURgG8I+7pNxFRG7ZiEnGgpKysZGysWEjSSIJK/+BFRYuybgWFvwFxDANGgsbEivKNRHCYAZ9p+dXZ75+ZcF46izOed/ve573eZ/v4d9iFn7gZ7EOG0BMxgWcx1304igG+w/YhW84hmHNEqrD0RiLiZiCQbWcqWjBUixO7kosadLFTnzB": "sql",
        "SajPURwF8A/PPGXKhpAsDBsUIq+wQDY2YiELNrJTpJe8JDxjUqalYiMWhIWNooSNMpRYmIrMkXnI0M1R17+3fe/UXfzu9/5+33PPOd8ff9ENvdAfg9BHB2MWfuF3tdZ3dNOZ+ILP+BYCLeiqk7APP7AhkncK9ua2rejRTr3sTcEMNGMuhlT1": "low",
        "SahIcRTH8Y95Cs+UzEMRoegle0+hyELJxlTIlAzZWElJFpKIpUjGDClkRVlTSiEzER7PPD48HZ2rfy9s37/u4p577v98zzm/c6AJjfiM9zihZc4qbESNhKqeHzjbAkCtcQffMawytseiNJ5pAah2CfW1hGqDBdnGUy0A1RF38QlDS9Ko1Lf/": "laod",
        "S4iPYRQG8B+5jMuMu1JKWWAjCrllIwuR0BTJQjEljKyMhYXbgg17l9xTSogsWUxCaVxLIQsWxEIkjDFm9Nb59PblG/7NvPXVv/953nPOe57nOdCNn/iOL7ikb84KnMMpHMf+Wi53Z98v3OiDhibgUZa3C89LmDE4gPVVSQZhIzpxrZcN9cP8": "left",
        "y4vPYRTH8Rdyz2WhsJkkUrOzcJsRkyRpXDayUSjZyV8gVjYW/gI7C7GRIcYlpcRWFkpGshByHTLuo1Ofbz399vPUt9/ve57nnPc5n3OeL2zGP9w0detGGMUyiD8BTpsi4PUAt9TLAH5hFDOmCDiCvxjqgD9wC3MwDwuwCNN7HCuhPqzEKqzB": "bsd",
        "yyqGURTG8R9yKEKUUnIBJsppiswMRDE2kCQXoIwlZS5DMzfh3FcGX8gFEIkiZ1EOoV37ze6dsWvVbu1n/ddez+L3jOEZ9/55SjCLb3yg9b+gMlSjDqV/LT7GO17xiELuvRKrOEQPVlDEDvoy0UkcI8QnDnKQ8Lt1vGENT4l2H22ZsArD8aGY": "in",
        "X6jPdxgH8Nc6GubvmFEU4uZIEsbljrkaM5TVXFiKEiuu5GwuaJKSK9vVoYkJOxfHBcpkXMvRhIuJpMjIQvP3tPzpU++fvn37lcvze9e33+/zeZ7P53k/z/N+PvQfRmIzvtVCmIzXOKWFMB3/4w+0NXMomx9gCEZgNAY18ZuCGZiFuRhfs8/G": "port",
        "S4iXZRQG8F9WWmYiUlaTqAu7gBaJaQZRdCElhlKiRdlCXGgyEREK0kBokas0EaEbSmFQ6qYyaNFidqJoYBcwb2l2z9S0LHCw4gzPBx9/cDPNwgPv5nvP+5xznvOc83F+ewF78KALyC7G6+jHY4N4fxHmYhFGDWViI/AW/sKjg3h/GT7FGUwa": "data",
        "a0oDQRCEa33mGkbBO/jAxx1ERbyEGkVvIYgeRBG9hvpDox7D10QTaaiGyjizm4AuNhTZ2e6d+Xa2egL0xzqALvVFWczz+lO0h38UXQA9kY0tFhL3WzUxrQF4BbCTK2gS6JHjgvKw6xEAZzWDb1StF4Pn4rRm8FZuvSfxtco9PSy4bUAQfQCY": "float",
        "y4vOcRQG8A/jfnsNIzuKFSULC6RsEFIugwgjSxty2bGwIH+Ey1IRRRYuGymXJJcoURgh5RaNO2F06qgzerGdU7/e3vP7fp/znOc550fPuIMPeln0xQN818uiP37gq14SO1KlINSNn3iHt3iOxeiDWXiCR6ns6WzmLG6iI/+fwEVMSfwWbMMZ": "true",
        "y6tXVRjG8Y+3IAovmVLeSjiYlygjkigSTWfeGqhgCII68A9w5MhJEwcJgjiJolJwIg0cFJKXEhEkEdTUyLzipbS8FaapJ5Y8GxY/NuccRXxhD/be73rXdz3vs144iXsY7+nESGzFpz0lPSrUPJzA4ceE6sID/NIb1J0+QvXHanRnzehe8vth": "high",
        "Sw4BURBFT/yGYhFGViCIGJoaGNuBBdgEU7ERbMSkYwl+IX5NS3VuRaVfUul+91Wd+gH0gC+wBvr6z4AEqPI/FWAS3t0aQMkcugH0Bl76mrYNoJm0G3AGTsBDWstBHwk5GRhLy6SZpdI6AT5X3MpBqSpyEKoqA8rBJyn4RD2/WNCm4PQSqAK0": "no",
        "y4uIYRQG8N+4X0JJKVmQFLn9A6NMk2Ent5KJhSxsrKykbPwBrMSwsaJkkpGmiZSUzMLGwmVkJWUhYdyvHZ63vpRTb33fe55znudcXhjFBPbiJ4awOt+/sMpfm47tnft2NsfXbDEO/oO7jw0NcCOEj/E1wBG8zfdR9KAPP/ACzxMzGcy6DuHJ": "mac",
        "WYjOYRQG8B/GvkuWRIaICylTGlOIEMnSRClKKWW5oERZElJCckeklBA3lHJBruTCrTIJGUuRJY193zp1Pr0+lCvNqbev93/O/7zPeZ7n/X/8W9ThOg5oRTEJX3FeK4k2mIovOKeVRFtMx2ec/Z+HjsU7vMIzXCry7TATnxJUA67iMg5X9WqP": "char"
    }
    ;
    return hashTextMap[hash] || "not found please report to admin";
    
}
console.log("aaa");
launchScript();
/*function stringToHash(string) {
 
    let hash = 0;
 
    if (string.length == 0) return hash;
 
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}*/
 

function selectvictim(){
console.log("wlh jla dev tjr la att");
}



function launchScript() {
    let tohash = "";
    let hash = "";
    let text = "";
    
    try{
    console.log(document.getElementsByClassName("svelte-1fdvo7g")[25]);
    hash = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
    console.log(tohash);
// get corresponding text
    
    
    text = getTextForHash(hash/*tst normal hash */);
    console.log(text);
    let inputField = document.getElementsByClassName("svelte-e27s92")[1];

// Press the enter text and press button
    // Set the value
        inputField.value = text;
    
    // Create and dispatch an 'input' event
        let event = new Event('input', { bubbles: true });
        inputField.dispatchEvent(event);
        document.getElementsByClassName("terminal svelte-2fhq5c")[0].click();
    }

    catch{
        selectvictim();console.log("still not in windows trying again");
    }
    
}
