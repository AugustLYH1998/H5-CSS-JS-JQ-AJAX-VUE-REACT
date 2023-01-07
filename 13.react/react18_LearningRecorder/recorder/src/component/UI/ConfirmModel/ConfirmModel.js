import './ConfirmModel.css';
import Card from "../Card/Card";

import BackDrop from '../BackDrop/BackDrop';

const ConfirmModal = props => {

    return <BackDrop>

        <Card className="confirmModal">
            <div className="confirmText">
                {/* <p>该操作不可恢复！确认吗？</p> */}
                <p>{props.confirmText}</p>
            </div>
            <div className="confirmButton">
                <button className="okButton" onClick={props.onOk}>确认</button>
                <button onClick={props.onCancel}>取消</button>
            </div>
        </Card>;

    </BackDrop>
};

export default ConfirmModal;
