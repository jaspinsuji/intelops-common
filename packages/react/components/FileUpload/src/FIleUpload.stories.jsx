import react from 'react';
import FileUpload from './FileUpload';
import Icons from '../../Icon/src/Icon';

export default {
    title: 'FileUpload',
    component: FileUpload
};

export const file = () => <FileUpload  children='Client Key' type="file" icon={<Icons variant='extraSmall' color="slate" icon="CloudUploadIcon"/>}/>

