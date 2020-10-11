import { LitElement, html, css } from 'lit-element';

class SelectComp extends LitElement {
    constructor(){
        super();
        this._handleRangeChange = this._handleRangeChange.bind(this);
    }

    static get styles(){
        return css`
        .select-class{
            background-color: grey; 
            color:white;
            text-align: center;
            padding: 15px;
        }
         
        .dropbtn {
        background-color: rgb(76 127 175);
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 262px;
        }

        
        .dropbtn:hover, .dropbtn:focus {
        background-color: rgb(39 66 90);
        }

       
        #myInput {
        box-sizing: border-box;
        background-image: url('searchicon.png');
        background-position: 14px 12px;
        background-repeat: no-repeat;
        font-size: 16px;
        padding: 14px 20px 12px 45px;
        border: none;
        border-bottom: 1px solid #ddd;
        }

        
        #myInput:focus {outline: 3px solid #ddd;}

       
        .dropdown {
        position: relative;
        display: inline-block;
        }

        
        .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f6f6f6;
        min-width: 230px;
        border: 1px solid #ddd;
        z-index: 1;
        }

        
        .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        }

       
        .dropdown-content a:hover {background-color: #f1f1f1}

        
        .show {display:block;}
        `
    }



    render(){
        return html `
        <section>
            <div>
                <h1  class="select-class">Lit Element</h1>

                <div class="dropdown">
                    <button @click="${this.handleClick}" class="dropbtn">Select Country</button>
                    <div id="myDropdown" class="dropdown-content">
                        <input type="text" placeholder="Search.." 
                        id="myInput" 
                        @input=${this.filterFunction}">
                        <a href="#about">Australia</a>
                        <a href="#base">Brazil</a>
                        <a href="#blog">Canada</a>
                        <a href="#contact">Denmark</a>
                        <a href="#custom">England</a>
                        <a href="#support">France</a>
                        <a href="#tools">Germany</a>
                    </div>
                </div>
            </div>
        </section>
            
        `
    }

    handleClick(){
        this.shadowRoot.getElementById("myDropdown").classList.toggle("show");
    }

    _handleRangeChange(event) {
        this.selectedValue = event.target.value;
        console.log(this.selectedValue)
    }

    filterFunction() {
        // console.log("key pressed");
        var input, filter, ul, li, a, i;
        input = this.shadowRoot.getElementById("myInput");
        filter = input.value.toUpperCase();
        console.log(filter);
        var div = this.shadowRoot.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
      
        for (i = 0; i < a.length; i++) {
          var txtValue = a[i].textContent || a[i].innerText;
            
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            console.log(a[i].textContent);
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
            // console.log(a[i].innerText);
          }
        }
      }

}

customElements.define('select-comp', SelectComp);