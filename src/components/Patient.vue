<template>
    <div class="patient">
        <h1>Patient Area</h1><br />
        <b-field label="First Name">
            <b-input placeholder="John" v-model="input.first"></b-input>
        </b-field>

        <b-field label="Last Name">
            <b-input placeholder="Doe" v-model="input.last"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                placeholder="john.doe@needhalp.com"
                maxlength="30"
                v-model="input.email">
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-primary">Search</button>
            </p>
        </b-field>

        <b-field label="Doctor" v-model="input.doctor">
            <b-select placeholder="Select a doctor" >
                <option value="Doctor 1">Doc 1</option>
                <option value="Doctor 2">Doc 2</option>
            </b-select>
        </b-field>

        <b-field>
            <p class="control">
                <button class="button is-primary" type="submit" v-on:click="submit()">Submit</button>
            </p>
        </b-field>
    </div>
</template>

<script>
    export default {
        name: 'Patient',
        data() {
            return {
                input: {
                    first: '',
                    last: '',
                    email: '',
                    doctor: ''
                }
            }
        },
        methods: {
            submit() {
                console.log(this.input)
            }
        }
    }
</script>

<style scoped>
    .patient {
        background-color: #FFF;
        border: 1px solid #CCCCCC;
        margin: auto;
        padding: 20px;
        margin-top: 10px;
        width: 500px;
        margin-bottom: 10px;
    }
</style>