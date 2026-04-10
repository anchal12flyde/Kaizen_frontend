"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui-kit/button";
import Footer from "@/components/ui-kit/footer";
import Header from "@/components/ui-kit/header";
import { Container } from "@/components/ui-kit/spacing";
import Typography from "@/components/ui-kit/typography";
import Image from "next/image";
import AnimatedFadeUp from "@/components/AnimatedFadeUp";
import { contactAPI } from "@/lib/api";

// Helper function to generate field keys from placeholder text
const getFieldKey = (placeholder) => {
  return placeholder.toLowerCase().replace(/\s+/g, '_');
};

export default function Contact() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/pages/contact');
        const result = await response.json();

        if (result.success && result.data) {
          const apiData = result.data;
          const transformedData = transformContactData(apiData);
          setPageData(transformedData);

          // Initialize form data with empty values using proper keys
          const initialFormData = {};
          const formFields = transformedData.contactSection.form.fields || [];
          formFields.forEach(field => {
            const fieldKey = getFieldKey(field.placeholder);
            initialFormData[fieldKey] = "";
          });
          setFormData(initialFormData);
        } else {
          setError("Failed to load contact page");
        }
      } catch (err) {
        console.error("Error fetching contact page:", err);
        setError(err.message || "Failed to load page");
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const transformContactData = (apiData) => {
    const heroSection = apiData.sections?.find(s => s.sectionId === 'contact_hero');
    const bgImage = heroSection?.fields?.find(f => f.key === 'bgImage')?.value || '';

    const formSection = apiData.sections?.find(s => s.sectionId === 'contact_form');
    const contactSection = {
      bgImage: bgImage,
      form: {
        title: formSection?.fields?.find(f => f.key === 'title')?.value || '',
        fields: formSection?.fields?.find(f => f.key === 'fields')?.value || [],
        textarea: formSection?.fields?.find(f => f.key === 'textarea')?.value || { placeholder: '' },
        button: formSection?.fields?.find(f => f.key === 'button')?.value || { label: '' },
      },
      locations: formSection?.fields?.find(f => f.key === 'locations')?.value || { title: '', items: [], mapImage: '' },
    };

    const infoSection = apiData.sections?.find(s => s.sectionId === 'contact_info');
    const contactInfo = {
      items: infoSection?.fields?.find(f => f.key === 'items')?.value || [],
    };

    const ctaSection = apiData.sections?.find(s => s.sectionId === 'contact_cta');
    const contactCTA = {
      title: ctaSection?.fields?.find(f => f.key === 'title')?.value || '',
      button: ctaSection?.fields?.find(f => f.key === 'button')?.value || { label: '' },
    };

    return { contactSection, contactInfo, contactCTA };
  };

  const handleInputChange = (fieldKey, value) => {
    setFormData(prev => ({ ...prev, [fieldKey]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Use the contactAPI to submit the form
      const response = await contactAPI.submitContactForm(formData, description);

      if (response.success) {
        setSubmitSuccess(true);

        // Reset form
        const resetFormData = {};
        const formFields = pageData.contactSection.form.fields || [];
        formFields.forEach(field => {
          const fieldKey = getFieldKey(field.placeholder);
          resetFormData[fieldKey] = "";
        });
        setFormData(resetFormData);
        setDescription("");

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(response.message || "Failed to submit form");

        setTimeout(() => {
          setSubmitError(null);
        }, 5000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitError(err.message || "Failed to submit form. Please try again.");

      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("animationstart", (e) => {
        if (e.animationName === "onAutoFillStart") {
          input.style.webkitTextFillColor = "#000";
        }
      });
    });
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading contact page...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error || !pageData) {
    return (
      <>
        <Header />
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center m-8">
          <h3 className="text-lg font-semibold text-red-800">Error Loading Data</h3>
          <p className="text-red-600">{error || "Failed to load contact page"}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const { contactSection, contactInfo, contactCTA } = pageData;

  return (
    <div>
      <Header />

      <div variant="sectionSp1" className="relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={contactSection.bgImage}
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <Container
          variant="sectionSp1"
          className="relative z-10 flex items-center justify-center"
        >
          <div className="w-full md:p-[15px] p-[12px] bg-[var(--color-background-1)] overflow-hidden">
            <form onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col bg-[var(--color-background-1)]">
                {/* Left Form Section */}
                <div className="md:p-[46px] pb-[36px] !bg-none flex-1">
                  <Typography variant="header-5" className="mb-[76px]">
                    {contactSection.form.title}
                  </Typography>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-y-[36px] gap-x-[12px]">
                    {contactSection.form.fields?.map((field, i) => {
                      const fieldKey = getFieldKey(field.placeholder);
                      const value = formData[fieldKey] || "";

                      return (
                        <div key={i}>
                          <div className="inputBorderContact flex flex-col">
                            <label className="text-[#231F20] opacity-[50%]">
                              {field.placeholder}
                            </label>
                            <div className="pt-[8px] !text-black">
                              {field.type === 'select' || field.type === 'dropdown' ? (
                                <select
                                  value={value}
                                  onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                                  className="outline-none w-full bg-transparent text-black"
                                  required={field.required}
                                >
                                  <option value="">Select {field.placeholder}</option>
                                  {field.options?.map((option, idx) => (
                                    <option key={idx} value={option}>{option}</option>
                                  ))}
                                </select>
                              ) : field.type === 'textarea' ? (
                                <textarea
                                  value={value}
                                  onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                                  className="bg-transparent outline-none w-full text-black"
                                  rows={4}
                                  required={field.required}
                                />
                              ) : (
                                <input
                                  type={field.type || 'text'}
                                  autoComplete="on"
                                  style={{ WebkitTextFillColor: "#000" }}
                                  className="input outline-none w-full bg-transparent !text-black"
                                  value={value}
                                  onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                                  required={field.required}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="inputBorderContact flex flex-col !mt-[36px]">
                    <label className="text-[#231F20] opacity-[50%]">
                      {contactSection.form.textarea?.placeholder || "Message"}
                    </label>
                    <Typography variant="para-2" className="pt-[8px]">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-transparent outline-none w-full text-black autofill:!text-black"
                        rows={4}
                      />
                    </Typography>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-[40px] md:px-[32px] px-[24px] md:py-[16px] py-[16px] border border-[#231F20] md:w-fit w-full hover:bg-black hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : contactSection.form.button?.label}
                  </button>
                </div>

                {/* Right Location Section */}
                <div className="bg-[var(--color-accent)] md:w-[390px] w-full text-white relative flex flex-col justify-between">
                  <div className="md:p-[26px] p-[12px]">
                    <Typography variant="header-5" className="!text-white">
                      {contactSection.locations?.title}
                    </Typography>

                    {contactSection.locations?.items?.map((loc, i) => (
                      <div key={i} className="flex flex-col gap-[8px]">
                        <div className="flex items-center gap-[12px] mt-[28px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.9991 0C6.00516 0 2.75586 3.2493 2.75586 7.2432C2.75586 12.1998 9.23785 19.4763 9.51383 19.7836C9.77305 20.0723 10.2256 20.0718 10.4844 19.7836C10.7604 19.4763 17.2423 12.1998 17.2423 7.2432C17.2423 3.2493 13.993 0 9.9991 0ZM9.9991 10.8875C7.98965 10.8875 6.35488 9.25266 6.35488 7.2432C6.35488 5.23375 7.98969 3.59898 9.9991 3.59898C12.0085 3.59898 13.6433 5.23379 13.6433 7.24324C13.6433 9.2527 12.0085 10.8875 9.9991 10.8875Z"
                              fill="white"
                            />
                          </svg>

                          <Typography variant="header-2" className="!text-white">
                            {loc.city}
                          </Typography>
                        </div>

                        <Typography variant="para-2" className="!text-white">
                          {loc.address}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={contactSection.locations?.mapImage}
                    width={200}
                    height={200}
                    className="relative w-full h-auto"
                    alt="Map"
                  />
                </div>
              </div>
            </form>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-[var(--color-accent)]">
        {contactInfo.items?.map((item, i) => (
          <Container
            key={i}
            variant="sectionSp1"
            className={`flex items-center justify-center gap-[16px] ${i === 0 ? "border-b md:border-b-0 md:border-r border-white" : ""
              }`}
          >
            {/* ICON */}
            {item.type === "phone" && (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
                  fill="white"
                />
              </svg>
            )}

            {item.type === "email" && (
              <img
                src="https://ik.imagekit.io/a9uxeuyhx/Kaizen/Group%20(21).png"
                className="w-[20px] h-[15px]"
                alt="email"
              />
            )}

            {/* TEXT */}
            <Typography variant="header-2" className="!text-white">
              {item.value}
            </Typography>
          </Container>
        ))}
      </div>

      <Container
        variant="sectionSp1"
        className="bg-[var(--color-background-2)] flex md:flex-row flex-col gap-[46px] md:justify-between md:items-center"
      >
        <Typography variant="header-5" className="!text-white">
          {contactCTA.title}
        </Typography>

        <button className="md:px-[36px] px-[24px] md:py-[12px] py-[18px] border-[1px] border-[#FFFFFF] md:w-fit w-full text-white md:text-[18px] text-[18px]">
          {contactCTA.button?.label}
        </button>
      </Container>

      <Footer />
    </div>
  );
}