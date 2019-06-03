import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class WizardService {
    _instance: WizardService;
    shippingLabelForm: FormGroup;
    senderDetails: FormGroup;
    receiverDetails: FormGroup;
    weightDetails: FormGroup;
    shippingDetails: FormGroup;
    shippingOptions: Array<any>;
    constructor() {
        this.initializeForm();
    }

    getServiceInstance(): WizardService {
        if (this._instance) {
            return this._instance;
        } else {
            this._instance = new WizardService();
            return this._instance;
        }
    }

    initializeForm(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.shippingOptions = [
            { name: "ground", value: 1 },
            { name: "priority", value: 2 }
        ];
        this.shippingLabelForm = new FormGroup({});
        this.senderDetails = new FormGroup({
            senderName: new FormControl('', Validators.required),
            senderStreet: new FormControl('', Validators.required),
            senderCity: new FormControl('', Validators.required),
            senderState: new FormControl('', Validators.required),
            senderZip: new FormControl('', Validators.required)
        });

        this.receiverDetails = new FormGroup({
            receiverName: new FormControl('', Validators.required),
            receiverStreet: new FormControl('', Validators.required),
            receiverCity: new FormControl('', Validators.required),
            receiverState: new FormControl('', Validators.required),
            receiverZip: new FormControl('', Validators.required)
        });
        this.weightDetails = new FormGroup({
            weight: new FormControl('', Validators.required)
        });

        this.shippingDetails = new FormGroup({
            shippingOption: new FormControl('', Validators.required)
        });
        this.shippingLabelForm.addControl('senderDetails', this.senderDetails);
        this.shippingLabelForm.addControl('receiverDetails', this.receiverDetails);
        this.shippingLabelForm.addControl('weight', this.weightDetails);
        this.shippingLabelForm.addControl('shippingOption', this.shippingDetails);
    }
}