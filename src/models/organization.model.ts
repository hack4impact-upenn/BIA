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
  growthStage: string;
  innovatorSupport: string;
  profitStatus: string;
  logoURL: string;
  signatureProgram: {
    imageURL: string;
    description?: string;
  };
}

const OrganizationSchema = new Schema({
  organizationName: { type: String, required: true },
  yearFounded: { type: Number, required: false },
  shortDescription: { type: String, required: false },
  longDescription: { type: String, required: false },
  headquarterCity: { type: String, required: false },
  pointOfContact: {
    name: { type: String, required: false },
    title: { type: String, required: false },
    email: { type: String, required: false },
  },
  contactEmail: { type: String, required: false },
  website: { type: String, required: false },
  twitter: { type: String, required: false },
  facebook: { type: String, required: false },
  instagram: { type: String, required: false },
  linkedIn: { type: String, required: false },
  innovatorTypes: { type: [String], required: false },
  businessStages: { type: [String], required: false },
  industryFocus: { type: [String], required: false },
  programTypes: { type: [String], required: false },
  focusArea: { type: String, required: false },
  growthStage: { type: String, required: false },
  innovatorSupport: { type: String, required: false },
  profitStatus: { type: String, required: false },
  logoURL: { type: String, required: false },
  signatureProgram: {
    imageURL: { type: String, required: false },
    description: { type: String, required: false },
  },
  lat: { type: Number, required: false },
  long: { type: Number, required: false },
});

const Organization = mongoose.model<IOrganization>(
  'Organization',
  OrganizationSchema
);

export { Organization, IOrganization };
