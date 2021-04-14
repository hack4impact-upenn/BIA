import mongoose from 'mongoose';

const { Schema } = mongoose;

interface IOrganization extends mongoose.Document {
  _id: string;
  organizationName: string;
  yearFounded: number;
  shortDescription: string;
  longDescription: string;
  headquarterCity: string;
  pointOfContact: {
    title?: string;
    name: string;
    email: string;
  };
  contactEmail: string;
  website: string;
  twitter: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  innovatorTypes: string[];
  businessStages: string[];
  industryFocus: string[];
  programTypes: string[];
  focusArea: string;
  profitStatus: string;
  logo: Buffer;
  signatureProgram: {
    image: Buffer;
    description?: string;
  };
}

const OrganizationSchema = new Schema({
  organizationName: { type: String, required: true },
  yearFounded: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: false },
  headquarterCity: { type: String, required: true },
  pointOfContact: {
    name: { type: String, required: true },
    title: { type: String, required: false },
    email: { type: String, required: true },
    required: true,
  },
  contactEmail: { type: String, required: true },
  website: { type: String, required: true },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedIn: { type: String, required: false },
  innovatorTypes: { type: [String], required: false },
  businessStages: { type: [String], required: false },
  industryFocus: { type: [String], required: true },
  programTypes: { type: [String], required: true },
  focusArea: { type: String, required: true },
  profitStatus: { type: String, required: true },
  logo: { type: Buffer, required: true },
  signatureProgram: {
    image: { type: Buffer, required: false },
    description: { type: String, required: true },
    required: false,
  },
});

const Organization = mongoose.model<IOrganization>(
  'Organization',
  OrganizationSchema
);

export { Organization, IOrganization };
