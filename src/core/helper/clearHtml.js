export const  clearHtml=(texto) =>{

        let strHtmlCode = texto.replace(/&(lt|gt);/g,
        function ([,p1]) {
            return (p1 === "lt") ? "<" : ">";
        });
        return  strHtmlCode.replace(/<\/?[^>]+(>|$)/g, "");
}

