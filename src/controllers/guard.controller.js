import {
    response_200,
    response_400,
    response_500,
} from '../utils/responseCodes.js';
import Form from '../models/form.model.js';

export async function searchOutpass(req, res) {
    if (!req.body.otp) return response_400(res, 'Please enter otp!!');
    Form.findOne({ isAccepted: true, isUsed: false, otp: req.body.otp })
        .then((result) => {
            return response_200(res, 'Outpass found!!!', result);
        })
}

export async function acceptOutpass(req, res) {
    // console.log(req.query.id)
    Form.findByIdAndUpdate(req.query.id, { $set: { isUsed: true } }, { new: true })
        .then((finalResult) => {
            console.log(finalResult)
            return response_200(res, 'Outpass Used', finalResult);
        }).catch(error => { return response_500(res, 'Internal server error', error); });
}

export async function verifiedPasses(req, res) {
    Form.find({ isUsed: true })
        .then((finalResult) => {
            return response_200(res, 'Fetched all verified outpasses!!', finalResult);
        }).catch(error => { return response_500(res, 'Internal server error', error); });

}