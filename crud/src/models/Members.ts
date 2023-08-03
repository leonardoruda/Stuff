import { Schema, model, Model, connection } from 'mongoose';

type MemberType = {
    id: string,
    name: string,
    email: string,
    status: string
};

const schema = new Schema<MemberType>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    status: String
});

const members: string = 'Members';

export default (connection && connection.models[members])? connection.models[members] as Model<MemberType> : model<MemberType>(members, schema, 'members');