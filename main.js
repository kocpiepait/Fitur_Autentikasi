const lihatPassword = document.querySelector("#see_pass");
        const konfirPassword = document.querySelector("#see_konfir") 
        const isiPassword = document.querySelector("#password");
        const isiKonfir = document.querySelector("#konfir_password")

        // Fungsi lihat Password
        lihatPassword.addEventListener("click", function(){
            this.classList.toggle("bxs-hide");
            const type = isiPassword.getAttribute("type")
            === "password" ? "text" : "password";
            isiPassword.setAttribute("type", type);
        })

        // Fungsi lihat Konfir Password
        konfirPassword.addEventListener("click", function(){
            this.classList.toggle("bxs-hide");
            const types = isiKonfir.getAttribute("type")
            === "password" ? "text" : "password";
            isiKonfir.setAttribute("type", types);
        })
