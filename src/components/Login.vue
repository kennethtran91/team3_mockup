<template>
        <div id="login">
            <h1>Login</h1>
                <b-field label="Username"
                    type="is-success"
                    autocomplete="false">
                    <b-input value="patient" maxlength="20" v-model="input.username" v-on:keyup.enter.native="login()"></b-input>
                </b-field>
        
            <button class="button" type="submit" v-on:click="login()">Login</button>
        </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "") {
                    if(this.input.username == this.$parent.mockAccount1.username) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "patient" });
                    } else if(this.input.username == this.$parent.mockAccount2.username) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "doctor" });
                    } else if(this.input.username == this.$parent.mockAccount3.username) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "pharmacy" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }
</style>