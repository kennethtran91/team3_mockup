<template>
    <div class="patient">
        <h1>Patient Area</h1><br />
        <b-field label="First Name">
            <b-input placeholder="John" v-model="input.first"></b-input>
        </b-field>

        <b-field label="Last Name">
            <b-input placeholder="Doe" v-model="input.last"></b-input>
        </b-field>

        <b-field label="Doctor" v-model="input.doctor">
            <b-select placeholder="Select a doctor" icon-pack="fas" icon="capsules">
                <option value="Doctor 1">Doc 1</option>
                <option value="Doctor 2">Doc 2</option>
            </b-select>
        </b-field>

        <b-field label="Pharmacist" v-model="input.pharm">
            <b-select placeholder="Prefer Pharmacy" icon-pack="fa" icon="prescription-bottle">
                <option value="Pharm 1">Pharm 1</option>
                <option value="Pharm 2">Pharm 2</option>
            </b-select>
        </b-field>

        <b-field label="Medical Symptoms">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>

        <b-field label="Select a date">
        <b-datepicker
            placeholder="Click to select..."
            icon="calendar">
        </b-datepicker>
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