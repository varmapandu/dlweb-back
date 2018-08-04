import * as crypt from 'crypto';
import * as qs from 'querystring';

export class CCPaymentService {
    payment() {
        var workingKey = "3292ABC75DDFE357A592744FC574B303"
        let data: any = {
            order_id: 'oid',
            currency: 'INR',
            amount: '10000.00',
            language: 'EN',
            billing_name: 'Rohit',
            billing_address: 'Bangalore',
            billing_city: 'Bangalore',
            billing_state: 'Karnataka',
            billing_zip: '333333',
            billing_country: 'India',
            billing_tel: '1234567890',
            billing_email: 'testing@gmail.com',
            integration_type: 'iframe_normal'
        }
        let abcd = qs.stringify(data);

        console.log(abcd);
        var encCC = this.encrypt(abcd, workingKey);
        console.log(encCC);
        return this.returnHtml(encCC)

    }

    encrypt(plainText, workingKey) {
        var m = crypt.createHash('md5');
        m.update(workingKey);
        var key = m.digest();
        var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
        var cipher = crypt.createCipheriv('aes-128-cbc', key, iv);
        var encoded = cipher.update(plainText, 'utf8', 'hex');
        encoded += cipher.final('hex');
        return encoded;
    };


    decrypt(encText, workingKey) {
        var m = crypt.createHash('md5');
        m.update(workingKey)
        var key = m.digest();
        var iv = '\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f';
        var decipher = crypt.createDecipheriv('aes-128-cbc', key, iv);
        var decoded = decipher.update(encText, 'hex', 'utf8');
        decoded += decipher.final('utf8');
        return decoded;
    };

    returnHtml(encCC: string) {
        let merchant_id = "142083"
        let accessCode = "AVDU72EG11BY96UDYB"
        var htmlcode = 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=' + merchant_id + '&encRequest=' + encCC + '&access_code=' + accessCode + '"';
        return htmlcode;
    }
}
