<template>
    <section>
        <b-field label="Drug Library">
            <b-autocomplete
                size="20"
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. Adderall, Advil"
                icon="magnify"
                field="drug_name"
                @select="option => selected = option">
                <template slot="empty">No results found</template>
                <template slot-scope="props">
                    <div class="media">
                        <div class="media-content">
                            {{ props.option.drug_name }}
                            <br>
                            <small>
                                drug_tier: {{ props.option.drug_tier }}<br />
                                rxnorm_id: {{ props.option.rxnorm_id }}<br />
                                plan_id_type: {{ props.option.plan_id_type }}
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
        name: 'Drug',
        data() {
            const drugs = require('@/assets/drug.json')

            return {
                drugs,
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                var self = this;
                return this.drugs.filter((option) => {
                    return option.drug_name
                        .toLowerCase()
                        .indexOf(self.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>