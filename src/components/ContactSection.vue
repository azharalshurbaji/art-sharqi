<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" lg="6" sm="12">
                <v-form 
                validate-on="submit" 
                @submit.prevent="submit"
                class="pa-5 form_box"
                > 
                <h1 class="text-center text-brown pt-3">Countact Us</h1>
                <p class="text-center text-brown-lighten-1 text-subtitle-2 mb-5">
                    _____ .｡. o ★ o ★ .｡. _____
                </p>
                
                <v-text-field
                    v-model="fullName"
                    :rules="fullNameRules"
                    class=""
                    type="text"
                    variant="outlined"
                    label="Your Full name"
                    hint="Please enter Full name"
                    prepend-inner-icon="mdi-account"
                />
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    class="my-4"
                    type="email"
                    variant="outlined"
                    label="Your Email"
                    hint="Please enter Email"
                    prepend-inner-icon="mdi-email"
                />
                <v-textarea 
                    v-model="order"
                    :rules="orderRules"
                    label="Your order" 
                    hint="Please enter your order"
                    variant="outlined"
                    prepend-inner-icon="mdi-text"
                ></v-textarea>

                <v-radio-group 
                    label="Payment method:"  
                    v-model="defaultRadio" 
                    class="mx-3 mt-5" 
                    inline
                >
                    <v-radio 
                        label="Paiement when recieving" 
                        value="Paiement when recieving"
                    />
                    <v-radio 
                        label="Credit Card" 
                        class="offset-1" 
                        value="Credit Card"
                    />
                </v-radio-group>
                
                <v-col cols="auto"> 
                    <v-dialog
                        transition="dialog-top-transition"
                        v-model="dialog"
                    >
                        <template v-slot:activator="{ props }">
                            <v-btn 
                                type="submit" 
                                v-bind="props" 
                                block 
                                class="my-5" 
                                color="brown"
                            >
                            Send message
                            </v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card width="600" class="pa-2" style="margin: 0 auto;">
                                <div class="box-border">
                                    <v-card-text>
                                        <div class="text-h2 text-center pa-12">
                                            <v-icon
                                                class="my-3 txt-outlined"
                                                color="brown-lighten-5"
                                            >
                                            mdi-check-circle
                                            </v-icon>
                                            <div class="font-weight-bold txt-outlined">Thanks For You..</div>
                                        </div>
                                    </v-card-text>
                                    <v-card-actions class="justify-center">
                                        <v-btn
                                            variant="text"
                                            class="my-3"
                                            @click="isActive.value = false"
                                        >Close</v-btn>
                                    </v-card-actions>
                                </div>
                            </v-card>
                        </template>
                    </v-dialog>
                    </v-col>                    
                </v-form>
            </v-col>
            
            <!-- <v-col cols="12" lg="5" sm="12" class="mx-5">
                <h1 class="text-center text-h4 font-weight-bold text-black my-5">We are honored by your visit to our store ..</h1>
                <p class="text-center text-brown-lighten-1 text-subtitle-2 mb-5">
                    _____ .｡. o ★ o ★ .｡. _____
                </p>
                <v-card class="map pa-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d339.72124895216496!2d36.294410201805384!3d33.50928471459748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1673495978482!5m2!1sar!2s"
                        width="600"
                        height="450"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                    </v-card>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<script>
export default {

    data: () => ({

        fullName: '',
        email: '',
        order: '',
        defaultRadio: 'Paiement when recieving',
        dialog: false,

        fullNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'Please enter your Full name.'
        },
      ],
        emailRules: [
        value => {
          if (value?.length > 3) return true

          return 'Please enter your email.'
        },
      ],
        orderRules: [
        value => {
          if (value?.length > 3) return true

          return 'Please enter your order.'
        },
      ],
    }),

    methods: {
        submit() {
            if( !this.fullName || !this.email || !this.order && this.dialog )
            {
                alert('Please enter Fields')
                this.dialog = false;
        } else {
                
                this.dialog = true; 
                
                this.fullNameRules = '';  /* Remove Error Message*/
                this.emailRules = '';    /* Remove Error Message*/
                this.orderRules = '';  /* Remove Error Message*/
               
                this.fullName = "";    /*  Empty Enter Fields */
                this.email = "";     /*  Empty Enter Fields */
                this.order = "";    /*  Empty Enter Fields */
            }
        },
        
    },

}


</script>

<style>

.box-border
{
    border: 2px dotted #363131;
}

.txt-outlined
{
    color: #fff;
    text-shadow: 0 0 5px #363131,
     0 0 5px #363131,
      0 0 5px #363131,
       0 0 5px #363131;
}

</style>